import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { CategoriesService } from "src/app/shared/services/categories.service";
import { ModalAddEditeService } from "src/app/shared/services/modal-add-edite.service";
import { ProductsTopService } from "src/app/shared/services/products-top.service";
import { ProductsService } from "src/app/shared/services/products.service";
import { UploadImgService } from "src/app/shared/services/upload-img.service";
import { UsersService } from "src/app/shared/services/users.service";

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit {
  @Output() addClick = new EventEmitter();

  constructor(
    public modalService: ModalAddEditeService,
    public usersService: UsersService,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private productsTopService: ProductsTopService,
    private uploadService: UploadImgService
  ) { }

  ngOnInit(): void {
  }

  delete(): void {
    if (this.modalService.deleteCategory) { //видалення категорії
      this.deleteCategory();
    }
    if (this.modalService.deleteProduct) { //видалення продукта
      this.deleteProduct();
    }
    if (this.modalService.deleteUser) { //видалення продукта
      this.deleteUser();
    }
  }

  deleteCategory(): void{
    if(this.modalService.categoryNotEmpty){ //якщо категорія не пуста
      let arrProducts = null;
      let arrIDin = []; //масив внітрішніх id продуктів
      let arrDelProd = []; //масив продуктів, що видаляються
      const obj = this.modalService.deleteCategory[1].productsID;
      for (const key in obj) {
        arrIDin.push(obj[key][0]);
      };
      this.productsService.getProducts()
          .then((response) => {
            arrProducts = response;
          })
          .then(() =>{
            arrIDin.forEach(element => {
              arrProducts.some(function(el) {
                if(el[1].id === element){
                  arrDelProd.push(el);
                  return true;
                }
              });
            });
          })
          .then(() =>{
            this.productsTopService.arrAuditTop = [...arrDelProd]; //внесення масиву продуктів для видалення - для Топу
            this.deleteTopProduct();
            arrDelProd.forEach(element => { //видалення продуктів, що містяться у цій категорії
              this.modalService.deleteProduct = element;
              this.deleteProduct();
            })
          })
    }
    this.categoriesService //видалення самої категорії
    .deleteСategory(this.modalService.deleteCategory[0])
    .then(() => {
      this.addClick.emit();
    });
  }

  deleteProduct(): void{
    this.uploadService.deleteImg(this.modalService.deleteProduct[1].image); //видалення img
    this.productsService.deleteId(this.modalService.deleteProduct); //видалення id продукту з відповідної категорії
    this.productsService.deleteProduct(this.modalService.deleteProduct[0]) //видалення самого продукту
    if (!this.modalService.deleteCategory) { //якщо не відбувається видалення категорії
      this.deleteTopProduct(); //тоді видалення 1 продукту в Tопі (якщо він там є)
    }
  }

  deleteTopProduct(): void{ //видалення продукту/продуктів з Топ
    this.productsTopService.getProductsTop()
      .then(arrProductsTop => {
        if (!this.modalService.deleteCategory) { //якщо не відбувається видалення категорії - видалення 1 продукту з Топ
          if (arrProductsTop) {
            arrProductsTop.forEach(element => {
              if (element[1] && element[1].id === this.modalService.deleteProduct[1].id){
                this.productsTopService.deleteProduct(element[0]); //видалення, якщо є в Топ
              };
            });
          };
          this.addClick.emit();
          this.dismiss();
        } else if (this.modalService.deleteCategory) { //якщо відбувається видалення категорії
          if (arrProductsTop) {
            arrProductsTop.forEach(element => {
              this.productsTopService.arrAuditTop.forEach(el => {
                if (element[1].id === el[1].id) {
                  this.productsTopService.deleteProduct(element[0]); //видалення продукту з Топ
                }
              });
            });
          };
          this.productsTopService.arrAuditTop = null;
          this.dismiss();
        }
      })
  }

  deleteUser(): void{
    this.usersService
      .deleteUser(this.modalService.deleteUser[0])
      .then(() => {
        this.addClick.emit();
        this.dismiss();
      });
  }

  dismiss(): void {
    this.modalService.deleteProduct = null;
    this.modalService.deleteUser = null;
    this.modalService.deleteCategory = null;
    this.modalService.categoryNotEmpty = false;
    this.modalService.modalDelete = false;
  }
}
