import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

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
    private productService: ProductService
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
  }

  deleteProduct(id): void {
    this.modalService.modalDelete = true;
    this.modalService.indexDeleteProd = id;    
  }
}
