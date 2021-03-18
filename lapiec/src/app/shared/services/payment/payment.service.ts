import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  users: Array<any> = [
    {
      firstName: 'ivan1',
      lastName: 'ivanov1',
      position: 'junior',
      salary: '800',
      startWorking: new Date(2020, 4, 5),
      description: 'dsfmklsdjlkfjlkdsjhg  j hjjhkj jkl jk hjk hj l ;lkk l kl '
    },
    {
      firstName: 'ivan',
      lastName: 'ivanov',
      position: 'senior',
      salary: '2800',
      startWorking: new Date(2019, 8, 21),
      description: 'dsfmklsdjlkfjlkdsjhg  j hjjhkj jkl jk hjk hj l ;lkk l kl '
    },
    {
      firstName: 'petro',
      lastName: 'petriv',
      position: 'junior',
      salary: '1800',
      startWorking: new Date(2020, 1, 21),
      description: 'dsfmklsdjlkfjlkdsjhg  j hjjhkj jkl jk hjk hj l ;lkk l kl '
    }
  ]

  constructor() { }
}
