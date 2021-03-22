import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit {
  searchCategory = '';
  arrCategory = [];

  constructor( public categoryService: CategoryService ) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(): void{
    this.categoryService.getJSONCategory().subscribe(data => {
      this.arrCategory = data;
    });
  }

  addCategory (): void{
    this.categoryService.modalAddEdit = true;
    this.categoryService.add = true;
  }

  editCategory (i, name){
    this.categoryService.modalAddEdit = true;
    this.categoryService.add = false;
    this.categoryService.nameCategory = name;
    this.categoryService.editIndex = i;
  }

  deleteCategory (hostIndex): void {   
    this.categoryService.deleteJSONCategory(hostIndex).subscribe(
      () => { this.getCategory() }
    );
  }
}
