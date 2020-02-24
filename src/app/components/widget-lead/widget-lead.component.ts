import { Component, OnInit } from "@angular/core";
import { TasksService } from "src/app/services/tasks.service";
import { Task } from "src/app/models/task";

@Component({
  selector: "app-widget-lead",
  templateUrl: "./widget-lead.component.html",
  styleUrls: ["./widget-lead.component.scss"]
})
export class WidgetLeadComponent implements OnInit {
  leaderTasks: Task[] = [];
  constructor(private _tasksService: TasksService) {}

  ngOnInit() {
    this._tasksService.getTasks().subscribe(tasks => {
      this.leaderTasks = tasks.filter(task => task.isLeader);
    });
  }
}
