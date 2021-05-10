import { Component, OnInit } from '@angular/core';
import { ProductsService } from "src/app/shared/services/products.service";
import { ModalAddEditeService } from "src/app/shared/services/modal-add-edite.service";
import { UploadImgService } from 'src/app/shared/services/upload-img.service';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  searchProduct = '';
  searchCategory = '';
  arrProducts = null;
  editOneProduct = null;
  arrCategories = null; //всі категорії
  activeCategory = null; //поточна категорія
  arrCurrentProducts = null; //продукти поточної категорії

  constructor(
    public modalService: ModalAddEditeService,
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    public uploadService: UploadImgService
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts(): void {
    this.productsService
      .getProducts()
      .then(response => {
        this.arrProducts = response.reverse();
      });
  }

  getCategories(): void {
    this.categoriesService
      .getCategories() //отримання категорій
      .then(response => {
        this.arrCategories = response;
      })
  }

  addProduct(): void {
    this.modalService.modalAddEditProd = true;
    this.modalService.addProd = true;
  }

  editProduct(product): void {
    this.editOneProduct = product;
    this.modalService.modalAddEditProd = true;
    this.modalService.addProd = false;
  }

  deleteProduct(product): void {
    this.modalService.deleteProduct = product;
    this.modalService.modalDelete = true;
  }

  clickCategory(category): void{
    this.activeCategory = category;
    this.searchCategory = category[1].nameUA;
  }

  allCategory(): void{
    this.activeCategory = null;
    this.searchCategory = '';
  }
}
