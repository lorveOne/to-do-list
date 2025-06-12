import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/inbox', icon: 'mail' },
    { title: 'Tasks', url: '/tasks/list-tasks', icon: 'paper-plane' },
    { title: 'Add Task', url: '/tasks/form-task', icon: 'heart' },
    { title: 'Add Category', url: '/tasks/form-category', icon: 'heart' },
    { title: 'List Task', url: '/tasks/list-category', icon: 'heart' }
  ];
  public labels = [];
  constructor() {}
}
