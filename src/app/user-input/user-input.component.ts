import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  formGroup: FormGroup | undefined;

  ngOnInit() {
      this.formGroup = new FormGroup({
          text: new FormControl<string | null>(null)
      });
  }
  allItems = [
    { id: 0, description: "Task 1", done: false },
    { id: 1, description: "Task 2", done: false },
    { id: 2, description: "Task 3", done: false },
  ];

  addItem(description: string) {
    this.allItems.push({
      id: this.allItems.length,
      description,
      done: false
    });
  }

  DeleteTodo( id: number): void {
    this.allItems = this.allItems.filter(filter => filter.id !== id);
    // this.allItems.splice(id,1);
  }
  toggleComplete(id:number): void {
    this.allItems[id].done = !this.allItems[id].done;
  }

}

export class InputTextInvalidDemo {
  value: string | undefined;
}

export class ButtonIconOnlyDemo { }

export class ToggleButtonCustomizedDemo {
  checked: boolean = false;
}