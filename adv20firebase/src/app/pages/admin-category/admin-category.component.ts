import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/services/category.service";
import { ModalService } from "src/app/services/modal.service";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-admin-category",
  templateUrl: "./admin-category.component.html",
  styleUrls: ["./admin-category.component.scss"],
})
export class AdminCategoryComponent implements OnInit {
  searchCategory = "";
  arrCategory = [];
  arrProduct = [];

  constructor(
    public modalService: ModalService,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getCategory();
    this.getProduct();
  }

  getCategory(): void {
    this.categoryService.getJSONCategory().subscribe((data) => {
      this.arrCategory = data;
    });
  }
  getProduct(): void {
    this.productService.getJSONProduct().subscribe((data) => {
      this.arrProduct = data;
    });
  }

  addCategory(): void {
    this.modalService.modalAddEdit = true;
    this.modalService.add = true;
  }

  editCategory(i, name) {
    this.modalService.modalAddEdit = true;
    this.modalService.add = false;
    this.modalService.nameCategory = name;
    this.modalService.editIndex = i;
  }

  deleteCategory(i): void {
    let categoryActiv = false;
    this.arrProduct.map((elem) => {
      if (i == elem.category.id) {
        categoryActiv = true;
      }
    });
    if (!categoryActiv) {
    this.modalService.modalDelete = true;
    this.modalService.indexDelete = i;      
    }
  }
}
