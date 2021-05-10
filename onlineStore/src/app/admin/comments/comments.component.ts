import { Component, OnInit } from '@angular/core';
import { CommentsService } from "src/app/shared/services/comments.service";
import { ProductsService } from 'src/app/shared/services/products.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  arrComments = null;

  constructor(
    private productsService: ProductsService,
    private commentsService: CommentsService,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments(): void {
    this.commentsService
      .getComments()
      .then(response => {
        this.arrComments = response;
      });
  }

  moderateComment(comment): void{
    const newComment = {
      id: comment[1].id,
      text: comment[1].text,
      productName: comment[1].product.nameEN,
      categoryName: comment[1].category,
      autorName: comment[1].autor[1].name,
      autorEmail: comment[1].autorEmail,
      date: comment[1].date
    };

    this.productsService.getOneProduct(comment[1].productID)
    .then(data => {
      const currentProduct = data;
      if (currentProduct.comments) { //якщо продукт вже містить хоч 1 коментар
        currentProduct.comments.push(newComment);
      } else {
        currentProduct.comments = [newComment];
      }
      this.productsService.patchProduct(currentProduct, comment[1].productID); //запис коментаря в товар, до якого його додано
    })
    .then( () => {
      this.usersService.getOneUser(comment[1].autor[0])
      .then(data => {
        const currentAutor = data;
        if (currentAutor.comments) { //якщо користувач вже має хоч 1 коментар
          currentAutor.comments.push(newComment);
        } else {
          currentAutor.comments = [newComment];
        }
        this.usersService.patchUser([comment[1].autor[0], currentAutor]); //запис коментаря до користувача, який написав коментар
        this.deleteComment(comment); //видалення коментаря з бази непромодерованих коментарів
      })
    })
  }

  deleteComment(comment): void{
    this.commentsService
    .deleteCommentNotModerated(comment)
    .then(() => this.getComments());
  }

}
