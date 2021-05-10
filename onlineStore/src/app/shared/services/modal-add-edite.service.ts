import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalAddEditeService {
  modalDelete = false; //видимість модалки delete

  deleteCategory = null; //категорія, що видаляється
  modalAddEditCategory = false; //видимість модалки додавання/редагування категорії
  add = true; //визначення додавання чи редагування категорії
  categoryNotEmpty = false;
  editCategory = null; //категорія, що редагується

  deleteProduct = null; //продукт, що видаляється
  modalAddEditProd = false; //видимість модалки додавання/редагування продукта
  addProd = true; //визначення додавання чи редагування продукта
  editProduct = null; //продукт, що редагується
  editIndexProduct: string;

  deleteUser = null; //user, що видаляється

  constructor() { }
}
