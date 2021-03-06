import { Injectable } from '@angular/core';
import { ITasks } from '../interfaces/ITasks';
import { Tasks } from '../models/tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  editIndex: number;

  arrTasks: Array<ITasks> = [
    {
      task: 'HTML5',
      taskStatus: true,
    },
    {
      task: 'CSS3',
      taskStatus: true,
    },
    {
      task: 'SCSS',
      taskStatus: false,
    },
    {
      task: 'JavaScript',
      taskStatus: false,
    },
    {
      task: 'jQuery',
      taskStatus: false,
    },
    {
      task: 'Angular',
      taskStatus: false,
    }
  ];

  constructor() {}

  getTasks(): Array<ITasks> {
    return this.arrTasks;
  }

  setTasks(task: string): void {
    this.arrTasks.push(new Tasks (task, false));
  }

  delTasks(index: number): void{
    this.arrTasks.splice(index, 1);
  }

  edirTasks(editIndex: number, task: string): void {
    this.arrTasks.splice(editIndex, 1, new Tasks (task, false));
  }
}
