import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ICategory } from "src/app/interfaces/category.interface";
import { CategoryService } from "src/app/services/category.service";
import { ModalService } from "src/app/services/modal.service";
import { ProductService } from "src/app/services/product.service";
import { UploadFileService } from "src/app/services/upload-file.service";
import { Uuidv4Service } from "src/app/services/uuidv4.service";

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
    private productService: ProductService,
    private uuidv4Service: Uuidv4Service,
    public uploadFileService: UploadFileService
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
      this.modalService.currentProduct.category
      &&
      this.modalService.currentProduct.nameUA
      &&
      this.modalService.currentProduct.description
      &&
      this.modalService.currentProduct.price
      &&
      this.uploadFileService.productImage
    ) {
      this.modalService.currentProduct.id = this.uuidv4Service.uuidv4();
      this.modalService.currentProduct.image = this.uploadFileService.productImage;

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


      this.uploadFileService.productImage = '';
      this.uploadFileService.progressActive = false;
    };
  }

  edit(): void {
    if (
      this.modalService.currentProduct.category &&
      this.modalService.currentProduct.nameUA &&
      this.modalService.currentProduct.description &&
      this.modalService.currentProduct.price&&
      this.uploadFileService.productImage
    ) {
      this.modalService.currentProduct.image = this.uploadFileService.productImage;

      this.productService
      .updateJSONProduct(this.modalService.currentProduct)
      .subscribe(() => {
        this.addClick.emit();
      });
      this.close();


      this.uploadFileService.productImage = '';
      this.uploadFileService.progressActive = false;
    }
  }

  close(): void {
    this.modalService.modalAddEditProd = false;
    this.modalService.clearCurrentProduct();
    this.modalService.editIndex = null;
    if (this.modalService.addProd){   //якщо відбувається створення нового товару
      this.uploadFileService.deleteImg(this.uploadFileService.productImage);   //видалення картинки з firebase
    };
    this.uploadFileService.productImage = '';
  }
}
