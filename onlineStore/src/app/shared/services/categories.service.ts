import { Injectable } from '@angular/core';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { ModalAddEditeService } from "src/app/shared/services/modal-add-edite.service";
import { ICategory } from '../interfaces/category.interface';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(
    private constantsService: ConstantsService,
    public modalService: ModalAddEditeService
    ) {}

  getCategories() {
    return fetch(`${this.constantsService.firebaseCategories}.json`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => Object.entries(response))
      .catch( error => {
          console.warn('getCategories', error);
          return null;
        });
  }

  postCategory(category: ICategory) {
    return fetch(`${this.constantsService.firebaseCategories}.json`, {
      method: 'POST',
      body: JSON.stringify(category),
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  patchСategory(category: ICategory) {
    return fetch(`${this.constantsService.firebaseCategories}/${category[0]}/.json`, {
        method: 'PATCH',
        body: JSON.stringify(category[1]),
        headers: {
          'Content-Type': 'application/json',
        }
      });
  }

  deleteСategory(categoryID) {
    return fetch(`${this.constantsService.firebaseCategories}/${categoryID}.json`, {
        method: 'DELETE',
        body: JSON.stringify(categoryID),
        headers: {
          'Content-Type': 'application/json',
        }
      });
  }

  //----------------------------------------------------------

    updateCategoryInProd(product: IProduct, elem) {
      return fetch(`${this.constantsService.firebaseProducts}/${product[0]}/category/1/.json`, {
        method: 'PATCH',
        body: JSON.stringify(elem),
        headers: {
          'Content-Type': 'application/json',
        }
      });
    }
}
