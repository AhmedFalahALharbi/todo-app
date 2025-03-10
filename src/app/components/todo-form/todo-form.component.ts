import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { addTodo } from '../../state/todo.actions';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      text: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.todoForm.valid) {
      this.store.dispatch(addTodo({ text: this.todoForm.value.text }));
      this.todoForm.reset();
    }
  }
}