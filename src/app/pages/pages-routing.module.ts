import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormTaskComponent } from '../pages/tasks/form-task/form-task.component';
import { ListTasksComponent } from '../pages/tasks/list-tasks/list-tasks.component';
import { ListComponent } from './category/list/list.component';
import { FormComponent } from './category/form/form.component';

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
  },
  {
    path: 'list-categories',
    pathMatch: 'full',
    component: ListComponent
  },
  {
    path: 'form-categories',
    pathMatch: 'full',
    component: FormComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesRoutingModule { }
