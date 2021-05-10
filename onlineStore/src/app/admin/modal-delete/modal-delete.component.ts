import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { CategoriesService } from "src/app/shared/services/categories.service";
import { ModalAddEditeService } from "src/app/shared/services/modal-add-edite.service";
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
    this.dismiss();
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
    })
  }

  deleteProduct(): void{
    this.uploadService.deleteImg(this.modalService.deleteProduct[1].image); //видалення img
    this.productsService.deleteId(this.modalService.deleteProduct); //видалення id продукту з відповідної категорії
    this.productsService.deleteProduct(this.modalService.deleteProduct[0]) //видалення самого продукту
      .then(() => {
        this.addClick.emit();
        this.dismiss();
      });
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
