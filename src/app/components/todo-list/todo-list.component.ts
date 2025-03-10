import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Todo } from '../../state/todo.model';
import { selectAllTodos } from '../../state/todo.selectors';
import { toggleTodo, deleteTodo } from '../../state/todo.actions';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$!: Observable<Todo[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.todos$ = this.store.pipe(select(selectAllTodos));
  }

  toggleComplete(id: string): void {
    this.store.dispatch(toggleTodo({ id }));
  }

  removeTodo(id: string): void {
    this.store.dispatch(deleteTodo({ id }));
  }
}