import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../interfaces/todo.model';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() complete = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();

  onComplete(): void {
    this.complete.emit();
  }

  onRemove(): void {
    this.remove.emit();
  }
}
