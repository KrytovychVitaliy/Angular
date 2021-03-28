import { Pipe, PipeTransform } from '@angular/core';
import { ICategory } from '../interfaces/category.interface';
import { IProduct } from '../interfaces/product.interface';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {
  filterArr: Array<ICategory | IProduct>;

  transform(arrCategory: Array<ICategory | IProduct>, searchCategory: string): unknown {
    if (!arrCategory.length){
      return [];
    }
    if (!searchCategory){
      return arrCategory;
    }
    return this.filterArr = arrCategory.filter(elem => elem.nameUA.toLowerCase().includes(searchCategory.toLowerCase()));
  }
}
