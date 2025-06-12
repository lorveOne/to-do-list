import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormTaskComponent } from './form-task/form-task.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';


const routes: Routes = [
  {
    path: 'form-task',
    pathMatch: 'full',
    component: FormTaskComponent
  },
  {
    path: 'list-tasks',
    pathMatch: 'full',
    component: ListTasksComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesRoutingModule { }
