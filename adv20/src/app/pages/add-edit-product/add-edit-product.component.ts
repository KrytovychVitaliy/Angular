import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ICategory } from "src/app/interfaces/category.interface";
import { CategoryService } from "src/app/services/category.service";
import { ModalService } from "src/app/services/modal.service";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-add-edit-product",
  templateUrl: "./add-edit-product.component.html",
  styleUrls: ["./add-edit-product.component.scss"],
})
export class AddEditProductComponent implements OnInit {
  @Output() addClick = new EventEmitter();
  arrCategory: Array<ICategory>;

  constructor(
    public modalService: ModalService,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(): void {
    this.categoryService.getJSONCategory().subscribe((data) => {
      this.arrCategory = data;
    });
  }

  add(): void {
    if (
      this.modalService.currentProduct.category &&
      this.modalService.currentProduct.nameUA &&
      this.modalService.currentProduct.description &&
      this.modalService.currentProduct.price
    ) {
      this.modalService.currentProduct.id = this.uuidv4();

      this.arrCategory.map((elem) => {
        if (elem.id === this.modalService.currentProduct.category.id) {
          this.modalService.currentProduct.category.nameUA = elem.nameUA;
        }
      });

      this.productService
        .postJSONProduct(this.modalService.currentProduct)
        .subscribe(() => {
          this.addClick.emit();
        });
      this.close();
    }
  }

  edit(): void {
    if (
      this.modalService.currentProduct.category &&
      this.modalService.currentProduct.nameUA &&
      this.modalService.currentProduct.description &&
      this.modalService.currentProduct.price
    ) {
      this.productService
      .updateJSONProduct(this.modalService.currentProduct)
      .subscribe(() => {
        this.addClick.emit();
      });
      this.close();
    }
  }

  close(): void {
    this.modalService.modalAddEditProd = false;
    this.modalService.clearCurrentProduct();
    this.modalService.editIndex = null;
  }

  uuidv4(): string {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}
