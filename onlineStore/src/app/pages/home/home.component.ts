import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/shared/services/constants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data = null;

  constructor(
    private constantsService: ConstantsService
  ) { }

  ngOnInit(): void {
    this.data = this.constantsService.companyDetails;
  }



}
