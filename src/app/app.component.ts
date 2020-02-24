import { Component } from "@angular/core";
import { TasksService } from "./services/tasks.service";
import { Task } from "./models/task";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [TasksService]
})
export class AppComponent {
  title = "tasks-manager";
  tasks: Task[];
  tasksCountSelf = 0;
  tasksCountTeam = 0;

  constructor(private _tasksService: TasksService) {
    this._tasksService.getTasks().subscribe(tasks => {
      this.tasksCountSelf = tasks.filter(task => !task.isGlobal).length;
      this.tasksCountTeam = tasks.filter(task => task.isGlobal).length;
    });
  }
}
