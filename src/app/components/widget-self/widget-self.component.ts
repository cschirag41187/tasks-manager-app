import { Component, OnInit } from "@angular/core";
import { TasksService } from "src/app/services/tasks.service";
import { Task } from "src/app/models/task";

@Component({
  selector: "app-widget-self",
  templateUrl: "./widget-self.component.html",
  styleUrls: ["./widget-self.component.scss"]
})
export class WidgetSelfComponent implements OnInit {
  myTasks: Task[] = [];
  constructor(private _tasksService: TasksService) {}

  ngOnInit() {
    this._tasksService.getTasks().subscribe(tasks => {
      this.myTasks = tasks.filter(task => !task.isGlobal);
    });
  }
}
