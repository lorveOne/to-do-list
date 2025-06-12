import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { FormTaskComponent } from '../pages/tasks/form-task/form-task.component';  
import { ListTasksComponent } from '../pages/tasks/list-tasks/list-tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListComponent } from './category/list/list.component';
import { FormComponent } from './category/form/form.component'; // Assuming you have a form component for categories

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      PagesRoutingModule,
      FormsModule,
    ReactiveFormsModule,
    ],
    declarations: [ FormTaskComponent, ListTasksComponent, ListComponent, FormComponent ]
})
export class PagesModule { }
