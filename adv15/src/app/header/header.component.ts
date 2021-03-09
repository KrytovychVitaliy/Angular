import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <h1>My phone book!</h1>
    <hr>
  `,
  styles: [
    `h1 {
      font-weight: bold;
      color: red;
      margin: 30px auto;
    }`
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
