import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-filter',
  templateUrl: './word-filter.component.html',
  styleUrls: ['./word-filter.component.scss'],
})
export class WordFilterComponent implements OnInit {
  badArr: Array<string> = ['java', 'tottenham'];
  inpValue = '';
  textArea = '';

  inputEmpty = false;
  texAreaEmpty = false;

  constructor() {}

  ngOnInit(): void {}

  clickReset(): void {
    this.badArr.length = 0;
    this.inpValue = '';
    this.textArea = '';
  }

  clickAdd(): void {
    if (this.inpValue){
      this.badArr.push(this.inpValue);
      this.inpValue = '';
      this.inputEmpty = false;
    }
    else{
      this.inputEmpty = true;
    }
  }

  clickCenzor(): void {
    if (this.textArea) {
      const arrTextarea: Array<string> = this.clearString(this.textArea);
      this.badArr.forEach((elemArrPrint) => {
        arrTextarea.forEach((elemArrTextarea, ind, arr) => {
          if (elemArrPrint === elemArrTextarea) {
            arr[ind] = '*'.repeat(elemArrTextarea.length);
          }
        });
      });
      this.textArea = arrTextarea.join(' ');
      this.texAreaEmpty = false;
    }
    else{
      this.texAreaEmpty = true;
    }
  }

  clearString(str: string): Array<string> {
    const a = str.split(' ');
    const newArr = [];
    a.forEach((el, ind) => {
      if (el !== '' && el !== ',') newArr.push(el);
    });
    newArr.forEach((el, ind) => {
      newArr[ind] = el.split(',');
    });
    const clearArr: Array<string> = [];
    newArr.forEach((el, ind) => {
      el.forEach((element) => {
        if (element !== '' && element !== ',') clearArr.push(element);
      });
    });
    return clearArr;
  }
}
