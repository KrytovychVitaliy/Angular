import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordFilterComponent } from './word-filter.component';

const routes: Routes = [
  {
    path: '',
    component: WordFilterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordFilterRoutingModule { }
