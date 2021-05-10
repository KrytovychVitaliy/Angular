import { Component, OnInit } from '@angular/core';
import { CategoriesService } from "src/app/shared/services/categories.service";
import { ModalAddEditeService } from "src/app/shared/services/modal-add-edite.service";

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss']
})
export class AdminCategoriesComponent implements OnInit {
  arrCategories = [];

  constructor(
    public modalService: ModalAddEditeService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesService
      .getCategories()
      .then(response => {
        this.arrCategories = response;
      });
  }

  addCategory(): void {
    this.modalService.modalAddEditCategory = true;
    this.modalService.add = true;
  }

  editCategory(oneCategory) {
    this.modalService.modalAddEditCategory = true;
    this.modalService.add = false;
    this.modalService.editCategory = [...oneCategory];
  }

  deleteCategory(oneCategory): void {
    if (oneCategory[1].productsID) {
      this.modalService.categoryNotEmpty = true;
    }
    this.modalService.modalDelete = true;
    this.modalService.deleteCategory = oneCategory;
  }
}
