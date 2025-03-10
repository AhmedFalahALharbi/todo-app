import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import { todoReducer } from './state/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'todos', reducer: todoReducer }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false
    }),
  ]
};