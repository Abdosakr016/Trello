import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
// export class TodoComponent {
//   todos: string[] = [];

//   addTodo(todo: string): void {
//     if (todo.trim()) {
//       this.todos.push(todo);
//     }
//   }
// }

export class TodoComponent {

  allItems = [
    { description: "eat", done: true },
  ];

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }
}