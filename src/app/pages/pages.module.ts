import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { FormTaskComponent } from './form-task/form-task.component';  
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      PagesRoutingModule,
      FormsModule,
    ReactiveFormsModule,
    ],
    declarations: [ FormTaskComponent, ListTasksComponent ]
})
export class PagesModule { }
