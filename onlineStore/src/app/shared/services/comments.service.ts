import { Injectable } from '@angular/core';
import { IComment } from '../interfaces/comment.interface';
import { ConstantsService } from './constants.service';
import { ModalAddEditeService } from './modal-add-edite.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private constantsService: ConstantsService,
    public modalService: ModalAddEditeService
  ) { }

  getComments() {
    return fetch(`${this.constantsService.firebaseComments}.json`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => Object.entries(response))
      .catch( error => {
          console.warn('getComments', error);
          return null;
        });
  }

  postCommentNotModerated(comment: IComment) {
    return fetch(`${this.constantsService.firebaseComments}.json`, {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  deleteCommentNotModerated(comment: IComment) {
    return fetch(`${this.constantsService.firebaseComments}/${comment[0]}.json`, {
      method: 'DELETE',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

}
