import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { TaskListRoutingModule } from './task-list-routing.module';
import { TaskListComponent } from './task-list.component';
import { TaskHeaderComponent } from './task-header/task-header.component';


@NgModule({
  declarations: [TaskListComponent, TaskHeaderComponent],
  imports: [
    CommonModule,
    TaskListRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ]
})
export class TaskListModule { }
