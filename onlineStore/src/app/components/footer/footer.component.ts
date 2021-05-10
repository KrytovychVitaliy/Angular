import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/shared/services/constants.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  data = null;

  constructor(
    private constantsService: ConstantsService
  ) { }

  ngOnInit(): void {
    this.data = this.constantsService.companyDetails;
  }


}
