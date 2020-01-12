import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public taskList: TODOItem[] = [{ task: 'Get hired in Group IT', checked: false }];
  public newTask = '';

  public addTask() {
    if (this.newTask.trim().length === 0) {
      return;
    }

    this.taskList.push({ task: this.newTask, checked: false});

    this.newTask = '';
  }
}

interface TODOItem {
  task: string;
  checked: boolean
}
