import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ua'
})
export class UaPipe implements PipeTransform {

  transform(value: string, symbol: string, convert: string): string {
    if (!value) {
      return '';
    }
    if (symbol) {
      return value;
    }
    return `₴ ${value}`;
  }
  // switch (symbol) {
  //   case 'CAD':
  //       if (convert === 'UAH'){
  //         return value * 28;
  //       }
  //       return `₴ ${value}`;

  //     break;

  //   dey
  
}
