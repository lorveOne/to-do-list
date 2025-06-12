import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: false,

})
export class FormComponent  implements OnInit {

  public form: FormGroup = this.formBuilder.group({
    title: ['',[Validators.required]],
    description: ['',[Validators.required]],
    createdAt: [new Date()]
  });
  constructor(
    public formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {}

  onSubmit() {
    if (this.form.valid) {
       const categories = JSON.parse(localStorage.getItem('categories') || '[]'); // Obtener categorias existentes o inicializar un array vacío
        categories.push(this.form.value); // Agregar la nueva categoria
        localStorage.setItem('categories', JSON.stringify(categories));
        this.router.navigate(['/tasks/list-categories']);
        this.form.reset(); // Resetear el formulario después de enviar
    // Guardar en localStorage
 
    } else {
      console.log('Form is invalid');
    }
  }

}
