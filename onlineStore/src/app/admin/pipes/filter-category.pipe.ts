import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {
  filterArr: any;

  transform(arrProducts, searchCategory: string): unknown {
    if (!arrProducts.length){
      return null;
    }
    if (!searchCategory){
      return arrProducts;
    }
    return this.filterArr = arrProducts.filter(elem => elem[1].category[1].nameUA.includes(searchCategory));
  }
}
