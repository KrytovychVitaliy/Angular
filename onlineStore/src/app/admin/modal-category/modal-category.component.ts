import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Uuidv4Service } from "src/app/shared/services/uuidv4.service";
import { Category } from "src/app/shared/models/category.model";
import { CategoriesService } from "src/app/shared/services/categories.service";
import { ProductsService } from "src/app/shared/services/products.service";
import { ModalAddEditeService } from "src/app/shared/services/modal-add-edite.service";
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ICategory } from 'src/app/shared/interfaces/category.interface';


@Component({
  selector: 'app-modal-category',
  templateUrl: './modal-category.component.html',
  styleUrls: ['./modal-category.component.scss']
})
export class ModalCategoryComponent implements OnInit {
  @Output() addClick = new EventEmitter();
  addOrEdit: boolean; //додавання чи редагування категорії
  nameCategoryEN = '';
  nameCategoryUA = '';
  arrProducts: [IProduct] = null; //для внесення змін в продукти при зміні назви категорії або її видаленні

  constructor(
    private modalService: ModalAddEditeService,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private uuidv4Service: Uuidv4Service
  ) {}

  ngOnInit(): void {
    this.getCategory();
    this.getProducts();
    this.getAdd();
  }
  getProducts(): void {
    this.productsService
      .getProducts()
      .then(response => {
        this.arrProducts = response;
      })
  }
  getCategory(): void{
    if (!this.modalService.add) {
    this.nameCategoryEN = this.modalService.editCategory[1].nameEN;
    this.nameCategoryUA = this.modalService.editCategory[1].nameUA;
    }
  }
  getAdd(): void{
    this.addOrEdit = this.modalService.add;
  }

  add(form: NgForm): void {
    if (form.form.valid) {
      const newCategory: ICategory = new Category(
        this.uuidv4Service.uuidv4(),
        this.nameCategoryEN,
        this.nameCategoryUA
      );
      this.categoriesService.postCategory(newCategory)
      .then(() => {
        this.addClick.emit();
        this.close();
      })
    }
  }

  edit(form: NgForm): void {
    if(form.form.valid){
      this.modalService.editCategory[1].nameEN = this.nameCategoryEN ;
      this.modalService.editCategory[1].nameUA = this.nameCategoryUA ;
      this.categoriesService
        .patchСategory(this.modalService.editCategory)
        .then(() =>{
          let arrIDin = []; //масив внітрішніх id продуктів
          let arrUpdateProd = []; //масив продуктів, категорії в яких будуть редагуватися
          const obj = this.modalService.editCategory[1].productsID;
          for (const key in obj) {
            arrIDin.push(obj[key][0]);
          };
          arrIDin.forEach(element => {
            this.arrProducts.some(function(el) {
              if(el[1].id === element){
                arrUpdateProd.push(el);
                return true;
              }
            });
          });
          arrUpdateProd.forEach(element => { //обновлення даних про категорію в продуктах, що містяться у категорії, що редагується
            this.categoriesService.updateCategoryInProd(
              element,
              {
                nameEN: this.nameCategoryEN,
                nameUA: this.nameCategoryUA
              });
          });
        })
        .then(() => {
          this.addClick.emit();
          this.close();
        })
    }
  }

  close(): void {
    this.modalService.editCategory = null;
    this.modalService.modalAddEditCategory = false;
  }
}
