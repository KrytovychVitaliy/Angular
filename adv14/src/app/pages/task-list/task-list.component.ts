import { Component, OnInit } from '@angular/core';
import { TaskListService } from '../../services/task-list.service';
import { ITasks } from '../../interfaces/ITasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers: [TaskListService]
})
export class TaskListComponent implements OnInit {
  arrTasks: Array<ITasks>;
  task = '';

  editElement = '';
  editIndex: number | null;

  constructor(private taskService: TaskListService) { }

  ngOnInit(): void {
    this.arrTasks = this.taskService.getTasks();
  }

  clickCheck(i){
    this.arrTasks[i].taskStatus = !this.arrTasks[i].taskStatus;
  }

  addTask(): void{
    if (this.task.length > 0){
      this.taskService.setTasks(this.task);
      this.taskService.getTasks();
      this.emptyInput();
    }
  }

  editTask(i: number){
    this.editIndex = i;
    this.editElement = this.arrTasks[i].task;
  }

  deleteTask(i: number): void{
    this.taskService.delTasks(i);
    this.taskService.getTasks();
    this.emptyInput();
  }

  saveTask(): void{
    this.taskService.edirTasks(this.editIndex, this.editElement);
    this.taskService.getTasks();
    this.emptyInput();
  }

  emptyInput(): void {
    this.editIndex = null;
    this.editElement = '';
    this.task = '';
  }
}
