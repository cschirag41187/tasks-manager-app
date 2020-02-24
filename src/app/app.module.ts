import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { TasksService } from "./services/tasks.service";
import { WidgetSelfComponent } from './components/widget-self/widget-self.component';
import { WidgetGlobalComponent } from './components/widget-global/widget-global.component';
import { WidgetLeadComponent } from './components/widget-lead/widget-lead.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, TasksComponent, WidgetSelfComponent, WidgetGlobalComponent, WidgetLeadComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TasksService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
