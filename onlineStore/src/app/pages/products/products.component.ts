import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { ProductsService } from 'src/app/shared/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  isLoad: boolean = null; //спінер завантаження img
  arrCategories = null; //всі категорії
  activeCategory = null; //поточна категорія
  arrCurrentProducts = []; //продукти поточної категорії
  arrProducts = null; //всі продукти

  returnedArray = null; //для пагінації
  paginationQuantity: number; //кількість товарів у пагінації

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router,
    private constantsService: ConstantsService,
   ) { }

  ngOnInit(): void {
    this.getCategories();
    this.paginationQuantity = this.constantsService.paginationQuantity;
  }

  getCategories(): void {
    this.categoriesService
      .getCategories() //отримання категорій
      .then(response => {
        this.arrCategories = response;
        this.activeCategory = this.arrCategories[0];
        if (this.route.snapshot.paramMap.get('category')) { //якщо перехід/повернення зі сторінки 1 товару - якщо роут визначено
          this.activeCategory = this.arrCategories.filter( elem => elem[1].nameEN.toLowerCase() === this.route.snapshot.paramMap.get('category'))[0];
        }
        this.navigateCategory();
      })
      .then(() => {
        if (this.route.snapshot.paramMap.get('category')){ //якщо роут вже визначено
          this.getProducts(); //отримання продуктів
        }
      })
  }

  navigateCategory(): void{
    if (this.arrCategories.length > 0){
      this.router.navigate([`/products/${this.activeCategory[1].nameEN.toLowerCase()}`]);
    }
  }

  getProducts(): void {
    this.productsService
      .getProducts()
      .then(response => {
        this.arrProducts = response;
      })
      .then(() => {
        if (this.activeCategory){
          this.getCarrentProducts(); //формування продуктів вибраної категорії
        }
      });
  }

  clickCategory(category): void{
    this.activeCategory = category;
    this.navigateCategory();
    this.getCarrentProducts();
  }

  getCarrentProducts(): void{
    if (this.activeCategory[1].productsID){ //якщо категорія містить продукти
      this.arrCurrentProducts = [];
      const idProdIn = Array.prototype.concat(...Object.values(this.activeCategory[1].productsID)); //внутрішні id, що містяться в категорії
      idProdIn.forEach(element => {
        this.arrProducts.some((el) => {
          if(el[1].id === element){
            this.arrCurrentProducts.push(el);
            return true;
          }
        });
        this.returnedArray = this.arrCurrentProducts.slice(0, this.paginationQuantity); //перша сторінка пагінації
      });
    } else {
      this.arrCurrentProducts = null;
    }
  }

  productCounter(product, isIncrease: boolean) {
    if (isIncrease) {
      product[1].count++;
    }
    else {
      if (product[1].count > 1 ) {
        product[1].count--;
      }
    }
  }

  addToBasket(product): void {
    this.productsService.addToBasket(product);
    product[1].count = 1;
  }

  openDetails(product): void{
    this.router.navigate([`${product[0]}`], { relativeTo: this.route });
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.arrCurrentProducts.slice(startItem, endItem);
 }

 onLoad(product): void{
  product[1].isLoad = true;
  if (!this.isLoad){
    this.isLoad = true;
  }
}
}
