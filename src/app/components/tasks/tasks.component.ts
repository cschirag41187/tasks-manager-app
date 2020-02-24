import { Component, OnInit } from "@angular/core";
import { TasksService } from "src/app/services/tasks.service";
import { Task } from "src/app/models/task";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent implements OnInit {
  allTasks: Task[] = [];
  constructor(private _tasksService: TasksService) {}

  ngOnInit() {
    this._tasksService.getTasks().subscribe(tasks => {
      this.allTasks = tasks;
    });
  }

  toggleStatus(id) {
    this._tasksService.toggleTaskStatus(id);
  }

  addTask() {
    const taskObj: Task = {
      id: new Date().getTime(),
      text: "Some task",
      isGlobal: false,
      isLeader: false,
      creator: "Chirag",
      isCompleted: false,
      start: new Date().toISOString(),
      end: new Date().toISOString()
    };
    this._tasksService.addTask(taskObj);
  }
}
