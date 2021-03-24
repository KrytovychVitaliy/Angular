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
    image: "https://lh3.googleusercontent.com/-dx4wrj59oRc/XVgWfDbsM-I/AAAAAAAANSE/hnk7G6g8JRERmQHG094KsP5JjLXjf0ZOQCLIBGAYYCw/w1440-h810-k-no/"
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
      image: "https://lh3.googleusercontent.com/-dx4wrj59oRc/XVgWfDbsM-I/AAAAAAAANSE/hnk7G6g8JRERmQHG094KsP5JjLXjf0ZOQCLIBGAYYCw/w1440-h810-k-no/"
    }
  }
}
