import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { WordFilterRoutingModule } from './word-filter-routing.module';
import { WordFilterComponent } from './word-filter.component';
import { WordHeaderComponent } from './word-header/word-header.component';


@NgModule({
  declarations: [WordFilterComponent, WordHeaderComponent],
  imports: [
    CommonModule,
    WordFilterRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ]
})
export class WordFilterModule { }
