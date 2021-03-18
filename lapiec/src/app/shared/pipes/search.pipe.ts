import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<any>, searchNane: string): unknown {
    if(!value){
      return [];
    }
    if(!searchNane){
      return value;
    }
    return value.filter( user =>
      user.firstName.toLowerCase().includes(searchNane.toLowerCase())
      ||
      user.lastName.toLowerCase().includes(searchNane.toLowerCase())
    );

    // return null;
  }

}
