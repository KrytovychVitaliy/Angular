import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  count = 0;

  ngOnInit(): void {
  }

  
  inc(): void{
    this.count++
  }

  dec(): void{
    this.count--
  }


}
