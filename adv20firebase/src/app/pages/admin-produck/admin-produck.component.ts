import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-admin-produck',
  templateUrl: './admin-produck.component.html',
  styleUrls: ['./admin-produck.component.scss']
})
export class AdminProduckComponent implements OnInit {
  searchProduct = '';
  arrProduct = [];

  constructor(
    public modalService: ModalService,
    private productService: ProductService,
    public uploadFileService: UploadFileService
    ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
    this.productService.getJSONProduct().subscribe(data => {
      this.arrProduct = data;
    });
  }


  addProduct(): void {
    this.modalService.modalAddEditProd = true;
    this.modalService.addProd = true;
  }

  editProduct(id, product): void {
    this.modalService.modalAddEditProd = true;
    this.modalService.addProd = false;
    this.modalService.editIndexProduct = id;

    this.modalService.currentProduct = product;
    this.uploadFileService.productImage = this.modalService.currentProduct.image;
  }

  deleteProduct(id, imgUrl): void {
    this.modalService.modalDelete = true;
    this.modalService.indexDeleteProd = id;
    this.uploadFileService.deleteImg(imgUrl);   //видалення картинки з firebase
  }
}
