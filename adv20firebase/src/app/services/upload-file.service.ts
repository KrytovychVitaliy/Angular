import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  productImage = '';
  progressActive = false;   //видимість різних label i прогрес-бару

  constructor(
    private storage: AngularFireStorage
  ) { }

  deleteImg(url): void{   //видалення картинки з firebase
    this.storage.refFromURL(url).delete();
  }
}
