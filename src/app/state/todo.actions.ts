import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.model';

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ text: string }>()
);

export const toggleTodo = createAction(
  '[Todo] Toggle Todo',
  props<{ id: string }>()
);

export const deleteTodo = createAction(
  '[Todo] Delete Todo',
  props<{ id: string }>()
);