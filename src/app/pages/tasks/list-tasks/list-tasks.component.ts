import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss'],
  standalone: false,
})
export class ListTasksComponent  implements OnInit {
    tasks: any[] = [];

  constructor(
  
  ) { }

  ngOnInit() {
    this.loadTasks();
  }

   loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1); // Eliminar del array
    localStorage.setItem('tasks', JSON.stringify(this.tasks)); // Actualizar localStorage
  }

   toggleComplete(task: any) {
    task.completed = !task.completed;
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
