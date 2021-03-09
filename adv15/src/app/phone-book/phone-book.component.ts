import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../interfaces/iuser';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})

export class PhoneBookComponent implements OnInit {
  @Input() passArr: Array<IUser>;
  @Input() index55: boolean | number;
  @Output() addClick = new EventEmitter();
  @Output() editClick = new EventEmitter();

  arrUser: Array<IUser>;
  searchContact = ''; // для пошуку - введений текст - поле input

  sortContact: any = ''; // для сортування
  clickElem: string; // для сортування - поточний клікнутий th

  firstArrows: boolean | string = ''; // видимість стрілок firstName
  lastArrows: boolean | string = ''; // видимість стрілок lastName
  phoneArrows: boolean | string = ''; // видимість стрілок phoneNum


  constructor() { }
  ngOnInit(): void {
    this.arrUser = this.passArr;
  }


  deleteContact(index: number): void {
    this.arrUser.splice(index, 1);
  }

  editContact(index: number): void {
    this.editClick.emit(index);
  }

  inputKeyup(): void{
    const newArr = this.passArr.filter( elem => {
      return (
        elem.firstName.toLowerCase().includes(this.searchContact.toLowerCase())
        ||
        elem.lastName.toLowerCase().includes(this.searchContact.toLowerCase())
        ||
        elem.phoneNum.toLowerCase().includes(this.searchContact.toLowerCase())
     );
    });
    this.arrUser = newArr;
  }

  sortFunc(clickTh: string): void{
    this.arrowsVis(clickTh); // робота стрілок
    if (clickTh === 'phoneNum'){
      this.sortArrayNumber(clickTh); //сортування по числах/номерах телефону
    }
    else {
      this.sortArrayString(clickTh);
    };
  }


  sortArrayString(elem: string): void{ //cортування колонок зі стрічками
    this.arrUser = this.passArr.sort(
      (a, b) => {
        if (this.firstArrows || this.lastArrows){
          if (a[elem] > b[elem]) return 1;
          if (a[elem] < b[elem]) return -1;
          if (a[elem] == b[elem]) return 0;
        }
        else{
          if (a[elem] < b[elem]) return 1;
          if (a[elem] > b[elem]) return -1;
          if (a[elem] == b[elem]) return 0;
        }
      }
    );
  }
  sortArrayNumber(elem: string): void{ //cортування числових колонок
    this.arrUser = this.passArr.sort(
      (a, b) => {
        if (this.phoneArrows) {return a[elem] - b[elem]}
        else {return b[elem] - a[elem]};
      }
    );
  }


  arrowsVis(elem: string): void{ //робота стрілок
    switch (elem) {
      case 'firstName':
        if (!this.firstArrows) {
          this.firstArrows = true;
        } else {
          this.firstArrows = false;
        }
        this.lastArrows = '';
        this.phoneArrows = '';
        break;
      case 'lastName':
        if (!this.lastArrows) {
          this.lastArrows = true;
        } else {
          this.lastArrows = false;
        }
        this.firstArrows = '';
        this.phoneArrows = '';
        break;
      case 'phoneNum':
        if (!this.phoneArrows) {
          this.phoneArrows = true;
        } else {
          this.phoneArrows = false;
        }
        this.firstArrows = '';
        this.lastArrows = '';
        break;
    }
  }
}
