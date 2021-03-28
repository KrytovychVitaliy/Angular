import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Category } from "src/app/models/category.model";
import { CategoryService } from "src/app/services/category.service";
import { ModalService } from "src/app/services/modal.service";
import { ProductService } from "src/app/services/product.service";
import { Uuidv4Service } from "src/app/services/uuidv4.service";

@Component({
  selector: "app-add-edit-category",
  templateUrl: "./add-edit-category.component.html",
  styleUrls: ["./add-edit-category.component.scss"],
})
export class AddEditCategoryComponent implements OnInit {
  @Output() addClick = new EventEmitter();
  arrProduct = [];

  constructor(
    public modalService: ModalService,
    public categoryService: CategoryService,
    private productService: ProductService,
    private uuidv4Service: Uuidv4Service
  ) {}
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
    this.productService.getJSONProduct().subscribe((data) => {
      this.arrProduct = data;
    });
  }

  add(): void {
    if (this.modalService.nameCategory) {
      const newCategory = new Category(
        this.uuidv4Service.uuidv4(),
        this.modalService.nameCategory
      );
      this.categoryService.postJSONCategory(newCategory).subscribe(() => {
        this.addClick.emit();
      });
      this.close();
    }
  }

  edit(): void {
    if (this.modalService.nameCategory) {
      const newCategory = new Category(
        this.modalService.editIndex,
        this.modalService.nameCategory
      );
      this.categoryService.updateJSONCategory(newCategory).subscribe(() => {
        this.addClick.emit();
      });
      
    this.arrProduct.map((elem) => {
      if (this.modalService.editIndex == elem.category.id) {
        elem.category.nameUA = this.modalService.nameCategory;
        this.productService.updateJSONProduct(elem).subscribe(() => {
          this.addClick.emit();
        });
      }
    });

    this.close();
    }
  }

  close(): void {
    this.modalService.modalAddEdit = false;
    this.modalService.nameCategory = "";
    this.modalService.editIndex = null;
  }
}
