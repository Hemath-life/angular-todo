import { Component } from '@angular/core';
import { Todo } from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoValue: string;
  list: Todo[];

  constructor(){
    this.list = [];
    this.todoValue = "";
  }

  addItem() {
    if (this.todoValue !== "") {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };
      this.list.push(newItem);
    }
    this.todoValue = "";
  }

  deleteItem(id: number) {
    this.list = this.list.filter(item => item.id !== id);
  }


}
