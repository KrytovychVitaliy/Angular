import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Category } from "src/app/models/category.model";
import { CategoryService } from "src/app/services/category.service";

@Component({
  selector: "app-add-edit-category",
  templateUrl: "./add-edit-category.component.html",
  styleUrls: ["./add-edit-category.component.scss"],
})
export class AddEditCategoryComponent implements OnInit {
  @Output() addClick = new EventEmitter();

  constructor(public categoryService: CategoryService) {}
  ngOnInit(): void {}

  add(): void {
    if (this.categoryService.nameCategory) {
      const newCategory = new Category(
        this.uuidv4(),
        this.categoryService.nameCategory
      );
      this.categoryService.postJSONCategory(newCategory).subscribe(() => {
        this.addClick.emit();
      });
      this.close();
    }
  }

  edit(): void {
    if (this.categoryService.nameCategory) {
      const newCategory = new Category(
        this.categoryService.editIndex,
        this.categoryService.nameCategory
      );
      console.log(newCategory);
      this.categoryService.updateJSONCategory(newCategory).subscribe(() => {
        this.addClick.emit();
      });
      this.close();
    }
  }

  close(): void {
    this.categoryService.modalAddEdit = false;
    this.categoryService.nameCategory = "";
    this.categoryService.editIndex = null;
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
