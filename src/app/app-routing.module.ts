import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstGanttComponent } from './first-gantt/first-gantt.component';
import { SecandGanttComponent } from './secand-gantt/secand-gantt.component';
import { ThirdGanttComponent } from './third-gantt/third-gantt.component';

const routes: Routes = [
  {
    path:'first-gantt',
    component: FirstGanttComponent
  },
  {
    path:'secand-gantt',
    component: SecandGanttComponent
  },
  {
    path:'third-gantt',
    component: ThirdGanttComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
