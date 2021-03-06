import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './users-list.component';
import { UsersHeaderComponent } from './users-header/users-header.component';


@NgModule({
  declarations: [UsersListComponent, UsersHeaderComponent],
  imports: [
    CommonModule,
    UsersListRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ]
})
export class UsersListModule { }
