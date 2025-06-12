import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.scss'],
  standalone: false,
})
export class FormTaskComponent  implements OnInit {
  public form: FormGroup = this.formBuilder.group({
    title: ['',[Validators.required]],
    completed: [false],
    categoryId: ['',[Validators.required]],
    createdAt: [new Date()]
  });
  constructor(
    public formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {}

  onSubmit():void {
   // Guardar en localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Obtener tareas existentes o inicializar un array vacío
    tasks.push(this.form.value); // Agregar la nueva tarea
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Guardar en localStorage

    this.router.navigate(['/tasks/list-tasks']);
  }


}
