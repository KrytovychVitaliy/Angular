import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { CategoryService } from "src/app/services/category.service";
import { ModalService } from "src/app/services/modal.service";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-delete-category",
  templateUrl: "./delete-category.component.html",
  styleUrls: ["./delete-category.component.scss"],
})
export class DeleteCategoryComponent implements OnInit {
  @Output() addClick = new EventEmitter();

  constructor(
    public modalService: ModalService,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {}

  dismiss(): void {
    this.modalService.modalDelete = false;
  }

  delete(): void {    
    if (this.modalService.indexDelete) {
      this.categoryService
        .deleteJSONCategory(this.modalService.indexDelete)
        .subscribe(() => {
          this.addClick.emit();
        });
      this.modalService.indexDelete = null;
    }
    if (this.modalService.indexDeleteProd) {
      this.productService
        .deleteJSONProduct(this.modalService.indexDeleteProd)
        .subscribe(() => {
          this.addClick.emit();
        });
      this.modalService.indexDeleteProd = null;
    }
    this.modalService.modalDelete = false;
  }
}
