# Angular Todo App with NgRx

A simple to-do list application built with Angular and NgRx for state management. This project demonstrates the implementation of Reactive Forms and NgRx for a full-featured task management application.

## Features

- Add tasks with validation
- Mark tasks as completed with visual feedback
- Delete tasks
- State management with NgRx
- Responsive design

## Technologies Used

- Angular (latest version)
- NgRx for state management
- Reactive Forms for form handling
- TypeScript
- CSS for styling

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── todo-form/
│   │   │   ├── todo-form.component.ts
│   │   │   ├── todo-form.component.html
│   │   │   └── todo-form.component.css
│   │   └── todo-list/
│   │       ├── todo-list.component.ts
│   │       ├── todo-list.component.html
│   │       └── todo-list.component.css
│   ├── state/
│   │   └── todo/
│   │       ├── todo.model.ts
│   │       ├── todo.actions.ts
│   │       ├── todo.reducer.ts
│   │       └── todo.selectors.ts
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   ├── app.config.ts
│   └── app.routes.ts
└── main.ts
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd angular-todo-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the development server:**
   ```
   ng serve
   ```

4. **Open your browser:**
   Navigate to `http://localhost:4200/`

## Implementation Details

### NgRx Implementation

The application uses NgRx for state management with the following components:

- **Actions:** Define what actions can be performed (add, toggle, delete tasks)
- **Reducer:** Handles state changes based on dispatched actions
- **Selectors:** Extract specific pieces of state for components to use
- **State:** Defines the structure of the application state

### Form Implementation

The Todo form is implemented using Angular's Reactive Forms:

- FormGroup for the overall form structure
- FormControl for individual form fields
- Validators for field validation (required field)
- Form submission handling

## License

MIT License
