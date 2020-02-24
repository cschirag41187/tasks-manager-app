import { Component, OnInit } from "@angular/core";
import { TasksService } from "src/app/services/tasks.service";
import { Task } from "src/app/models/task";

@Component({
  selector: "app-widget-global",
  templateUrl: "./widget-global.component.html",
  styleUrls: ["./widget-global.component.scss"]
})
export class WidgetGlobalComponent implements OnInit {
  teamTasks: Task[] = [];
  constructor(private _tasksService: TasksService) {}

  ngOnInit() {
    this._tasksService.getTasks().subscribe(tasks => {
      this.teamTasks = tasks.filter(task => task.isGlobal);
    });
  }
}
