// src/app/interfaces/todo.model.ts
export interface Todo {
  task: string;
  completed: boolean;
  duration: number;
  priority?: 'NORMAL' | 'HIGH' | 'LOW';
}
