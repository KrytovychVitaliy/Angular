import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../interfaces/iuser';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {
  @Input() passArr: Array<IUser>;
  @Input() add: boolean;
  @Input() index: number;
  @Output() clickX = new EventEmitter();
  @Output() clickAdd = new EventEmitter();
  @Output() clickEdit = new EventEmitter();

  firstNameInput = '';
  lastNameInput = '';
  phoneNumInput = '';
  ind: number;


  constructor() { }
  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    if ((this.index > 0 || this.index === 0) && (!this.ind)){
          this.firstNameInput = this.passArr[this.index].firstName;
          this.lastNameInput = this.passArr[this.index].lastName;
          this.phoneNumInput = this.passArr[this.index].phoneNum;
          this.ind = 123;
        }
  }


  addContact(): void {
    this.clickAdd.emit (this.dataFormation());
    this.inputEmpty();
    this.closeX();
  }

  editContact(): void {
    this.clickEdit.emit (this.dataFormation());
    this.inputEmpty();
    this.closeX();
    this.ind = null;
  }

  dataFormation(): User{
    return {
      'firstName': this.firstNameInput,
      'lastName': this.lastNameInput,
      'phoneNum': this.phoneNumInput
    }
  }


  closeX(): void {
    this.clickX.emit(null);
    this.inputEmpty();
  }

  inputEmpty(): void {
    this.firstNameInput = '';
    this.lastNameInput = '';
    this.phoneNumInput = '';
  }
}
