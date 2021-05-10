import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {
  filterArr: any;

  transform (arrProducts, searchProduct: string): unknown {
    if (!arrProducts.length){
      return null;
    }
    if (!searchProduct){
      return arrProducts;
    }

    return this.filterArr = arrProducts.filter(elem =>
      elem[1].nameEN.toLowerCase().includes(searchProduct.toLowerCase())
      ||
      elem[1].nameUA.toLowerCase().includes(searchProduct.toLowerCase())
      );
  }
}
