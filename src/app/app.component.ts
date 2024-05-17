import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from './components/interfaces/todo.model';
import { TodoItemComponent as TodoItemComponent } from "./components/todo-item/todo-item.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, FormsModule, TodoItemComponent, TodoItemComponent]
})
export class AppComponent {
  todos: Todo[] = [
    { task: 'Run Errands', completed: false, duration: 120, priority: 'HIGH' },
    { task: 'Wash Car', completed: true, duration: 180, priority: 'NORMAL' },
    { task: 'Do Laundry', completed: false, duration: 60, priority: 'LOW' }
  ];

  newTask: string = '';
  newDuration: number = 0;

  onComplete(todo: Todo): void {
    todo.completed = true;
  }

  onRemove(todo: Todo): void {
    this.todos = this.todos.filter(t => t !== todo);
  }

  addTask(): void {
    if (this.newTask && this.newDuration) {
      this.todos.push({ task: this.newTask, completed: false, duration: this.newDuration, priority: 'NORMAL' });
      this.newTask = '';
      this.newDuration = 0;
    }
  }
}

