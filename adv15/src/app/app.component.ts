import { Component } from '@angular/core';
import { IUser } from './interfaces/iuser';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'adv15';
  addBoolean: boolean;
  indexEdit: number;

  arrUser: Array<IUser> = [
    {
      firstName: 'petya',
      lastName: 'zhuk',
      phoneNum: '0631111111'
    },
    {
      firstName: 'petro',
      lastName: 'petriv',
      phoneNum: '0631222222'
    },
    {
      firstName: 'alejandro',
      lastName: 'del rio rlbrechet',
      phoneNum: '0633333333'
    },
    {
      firstName: 'vasylyna',
      lastName: 'vrublevska',
      phoneNum: '0635555555'
    },
    {
      firstName: 'ira',
      lastName: 'tytar',
      phoneNum: '0636666666'
    },
    {
      firstName: 'sofia',
      lastName: 'zhuk',
      phoneNum: '0977777777'
    }
  ];

  addPhone(ind): void{
    this.addBoolean = true;
  }

  editPhone(ind): void{
    this.addBoolean = true;
    this.indexEdit = ind;
  }

  clickModalX(bool): void{
    this.addBoolean = bool;
    this.indexEdit = bool;
  }

  clickModalAdd(us: User): void{
    this.arrUser.unshift(us);
  }

  clickModalEdit(us: User): void{
    this.arrUser.splice(this.indexEdit, 1, us);
  }
}
