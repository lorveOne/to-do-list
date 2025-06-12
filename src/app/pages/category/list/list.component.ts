import { Component, OnInit } from '@angular/core';
import { DataItem } from '../../../models/category'; // Importa el modelo DataItem
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: false,

})
export class ListComponent  implements OnInit {
  form: FormGroup;
  dataList: DataItem[] = [];
  isEditing: boolean = false;
  currentEditIndex: number = -1;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadData();
  }

  // Cargar datos desde localStorage
  loadData() {
    const storedData = localStorage.getItem('categories');
    this.dataList = storedData ? JSON.parse(storedData) : [];
  }

  // Guardar datos en localStorage
  saveData() {
    localStorage.setItem('categories', JSON.stringify(this.dataList));
  }

  // Editar elemento - cargar datos en el formulario
  editItem(item: DataItem, index: number) {
    this.isEditing = true;
    this.currentEditIndex = index;
    
    this.form.patchValue({
      title: item.title,
      description: item.description
    });
    
    // Scroll al formulario
    document.querySelector('.form-container')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  // Enviar formulario (actualizar elemento existente)
  onSubmit() {
    if (this.form.valid && this.isEditing) {
      // Actualizar el elemento existente
      this.dataList[this.currentEditIndex] = {
        ...this.dataList[this.currentEditIndex],
        title: this.form.value.title,
        description: this.form.value.description,
        date: new Date().toLocaleDateString() // Actualizar fecha de modificación
      };
      
      this.saveData();
      this.resetForm();
      
      console.log('Elemento actualizado:', this.dataList[this.currentEditIndex]);
    }
  }

  // Resetear formulario y estado de edición
  resetForm() {
    this.form.reset();
    this.isEditing = false;
    this.currentEditIndex = -1;
  }

  // Eliminar elemento
  deleteItem(index: number) {
    // Si estamos editando el elemento que vamos a eliminar, resetear el formulario
    if (this.currentEditIndex === index) {
      this.resetForm();
    } else if (this.currentEditIndex > index) {
      // Ajustar el índice si eliminamos un elemento anterior al que estamos editando
      this.currentEditIndex--;
    }
    
    this.dataList.splice(index, 1);
    this.saveData();
  }

  // Cancelar edición
  cancelEdit() {
    this.resetForm();
  }

}
