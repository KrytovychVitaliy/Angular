import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Uuidv4Service } from 'src/app/shared/services/uuidv4.service';
import { CommentsService } from 'src/app/shared/services/comments.service';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';
import { IComment } from 'src/app/shared/interfaces/comment.interface';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  activeUser: IUser = null; //залогінений user, в т.ч. адмін
  commentMessage = false;
  comment = '';
  idProduct = '';
  curentProduct: IProduct = null;
  orBlocked: boolean;

  constructor(
    private uuidv4Service: Uuidv4Service,
    private commentsService: CommentsService,
    private productService: ProductsService,
    private authorizationService: AuthorizationService,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getMyProduct();
    this.initSubscriptionUser();
    this.loadLocalStorageUser(); //якщо в LocalStorage вже є користувач
  }

  getMyProduct(): void {
    this.idProduct = this.route.snapshot.paramMap.get('id');

    this.productService.getOneProduct(this.idProduct)
    .then(product => this.curentProduct = product)
  }

  productCounter(product, isIncrease: boolean){
    if (isIncrease) {
      product.count++;
    }
    else {
      if (product.count > 1 ) {
        product.count--;
      }
    }
  }

  addToBasket(product): void{
    this.productService.addToBasket([this.idProduct, product]);
  }

  postCommentNotModerated(): void{
    if (this.comment) {
      const currentComment: IComment = {
        id: this.uuidv4Service.uuidv4(),
        text: this.comment,
        product: this.curentProduct,
        productID: this.idProduct,
        category: this.curentProduct.category[1].nameUA,
        autor: this.activeUser,
        autorEmail: this.activeUser[1].email,
        date: new Date(),
        moderation: false
      }
      this.commentsService.postCommentNotModerated(currentComment); //запис коментаря в базу всіх непромодерований коментарів
      this.comment = '';
      this.commentMessage = true;
    }
  }

  initSubscriptionUser(): void {
    this.authorizationService.loggedIn.subscribe( () => {
      this.loadLocalStorageUser();
    })
  }
  private loadLocalStorageUser(): void {
    if (localStorage.length > 0 && localStorage.getItem('activeUser')) { //якщо є залогінений користувач
      this.activeUser = JSON.parse(localStorage.getItem('activeUser'));
    this.usersService.getOneUser(this.activeUser[0])
      .then( respons => {
        this.orBlocked = respons.block; //актуальна інформація про блокування
      });
    } else { //якщо немає залогінених користувачів
      this.activeUser = null;
    }
  }

}
