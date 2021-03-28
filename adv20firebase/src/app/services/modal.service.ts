import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalDelete = false;
  indexDelete: string;

  modalAddEdit = false;
  add = true;
  nameCategory = '';
  editIndex: string;
  
  modalAddEditProd = false;
  addProd = true;
  editIndexProduct: string;
  indexDeleteProd: string;
  currentProduct = {
    id: "",
    category: {
      id: "",
      nameUA: ""
    },
    nameUA: "",
    description: "",
    price: null,
    image: ""
  }
  
  constructor() { }

  clearCurrentProduct (): void{
    this.currentProduct = {
      id: "",
      category: {
        id: "",
        nameUA: ""
      },
      nameUA: "",
      description: "",
      price: null,
      image: ""
    }
  }
}
