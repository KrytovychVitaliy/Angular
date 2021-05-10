import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NgForm } from '@angular/forms';
import { IProduct } from "src/app/shared/interfaces/product.interface";
import { Product } from "src/app/shared/models/product.model";
import { CategoriesService } from "src/app/shared/services/categories.service";
import { ModalAddEditeService } from "src/app/shared/services/modal-add-edite.service";
import { ProductsTopService } from "src/app/shared/services/products-top.service";
import { ProductsService } from "src/app/shared/services/products.service";
import { UploadImgService } from "src/app/shared/services/upload-img.service";
import { Uuidv4Service } from "src/app/shared/services/uuidv4.service";
@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.scss']
})
export class ModalProductComponent implements OnInit {
  @Output() addClick = new EventEmitter();
  @Input() editOneProduct;
  arrCategories = null;
  arrProductsTop = null;
  addOrEdit: boolean; //додавання чи редагування продукта

  categoryProduct = '';
  idEditProduct = '';
  currentProduct = {
    id: "",
    nameEN: "",
    nameUA: "",
    description: "",
    price: null,
    category: [],
    image: "",
    count: 1,
    inTop: false
  };

  constructor(
    private modalService: ModalAddEditeService,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private productsTopService: ProductsTopService,
    private uuidv4Service: Uuidv4Service,
    private uploadService: UploadImgService
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getProductsTop();
    this.ifEditProduct();
  }

  getCategories(): void {
    this.categoriesService
      .getCategories()
      .then(response => {
        this.arrCategories = response;
      });
  }

  getProductsTop(): void {
    this.productsTopService
      .getProductsTop()
        .then(response => {
          this.arrProductsTop = response;
        });
  }

  ifEditProduct(): void{ //якщо відбувається редагування продукта
    this.addOrEdit = this.modalService.addProd;
    if (!this.modalService.addProd) {
      this.categoryProduct = this.editOneProduct[1].category[0];
      this.uploadService.productImage = this.editOneProduct[1].image;
      this.idEditProduct = this.editOneProduct[0];
      this.currentProduct = {
        id: this.editOneProduct[1].id,
        nameEN: this.editOneProduct[1].nameEN,
        nameUA: this.editOneProduct[1].nameUA,
        description: this.editOneProduct[1].description,
        price: this.editOneProduct[1].price,
        category: [],
        image: '',
        count: 1,
        inTop: this.editOneProduct[1].inTop
      };
    }
  }

  add(form): void {
    if (form.form.valid && this.uploadService.productImage) {
      this.definitionCategory(); //додавання категорії
      const currentProduct: IProduct = new Product(
        this.uuidv4Service.uuidv4(),
        this.currentProduct.nameEN,
        this.currentProduct.nameUA,
        this.currentProduct.description,
        this.currentProduct.price,
        this.currentProduct.category,
        this.uploadService.productImage
        );
        this.productsService.postProduct(currentProduct) //запис продукта
            .then(() => {
              this.productsService.postId(currentProduct) //запис id продукту в кaтегорію
                  .then(() => {
                    this.uploadService.productImage = '';
                    this.addClick.emit();
                    this.close();
                  });
            });
      }
  }

  edit(form): void {
    if (form.form.valid && this.uploadService.productImage) {
      this.currentProduct.image = this.uploadService.productImage;
      this.definitionCategory(); //додавання категорії
      this.currentProduct.count = 1;
      this.productsService.patchProduct(this.currentProduct, this.idEditProduct) //обновлення продукта
        .then(() => {
          this.addClick.emit();
          this.changeTop();
          this.close();
        });
    }
  }

  changeTop(): void{ //видалення / додавання товару в Top
    if (this.currentProduct.inTop){ //додавання товару в Top
      this.productsTopService
        .postProductTop(this.currentProduct)
    } else { //видалення товару з топ, якщо він був попередньо туди внесений
      if (this.arrProductsTop){
        this.arrProductsTop.forEach(element => {
          if (element[1].id === this.currentProduct.id){
            this.productsTopService
              .deleteProduct(element[0])
          }
        });
      }
    }
  }

  close(): void {
    if (
      this.modalService.addProd === true //якщо в режимі додавання товару
      &&
      this.uploadService.productImage //завантажено картинку і нажато "закрити вікно"
      )
    { this.uploadService.deleteImg(this.uploadService.productImage); } //то картинка видаляється
    this.uploadService.productImage = '';
    this.idEditProduct = '';
    this.uploadService.progressActive = false;
    this.modalService.modalAddEditProd = false;
  }

  definitionCategory() { //додавання/визначення категорії
    this.arrCategories.forEach(element => {
      if (element[0] === this.categoryProduct){
        this.currentProduct.category.push(element[0]);
        this.currentProduct.category.push({
          id: element[1].id,
          nameEN: element[1].nameEN,
          nameUA: element[1].nameUA
        });
      }
    });
  }

}
