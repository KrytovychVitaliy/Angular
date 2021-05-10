import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { Uuidv4Service } from './uuidv4.service';

@Injectable({
  providedIn: 'root'
})
export class UploadImgService {
  uploadProgress: Observable<number>;
  productImage = '';
  dirPath = this.constantsService.dirPathProducts;
  progressActive = false;

  constructor(
    private storage: AngularFireStorage,
    private constantsService: ConstantsService,
    private uuidv4Service: Uuidv4Service
  ) { }

  saveImg(event){   //збереження картинки у firebase
    const file = event.target.files[0];
    const fileName = this.uuidv4Service.uuidv4();
    const fileType = file.type.split('/')[1];
    const filePath = `${this.dirPath}/${fileName}.${fileType}`;
    
    const task = this.storage.upload(filePath, file);
    this.uploadProgress = task.percentageChanges();
    task.then( result => {
      this.storage.ref(`${this.dirPath}/${result.metadata.name}`).getDownloadURL()
      .subscribe( img => {
        this.productImage = img;
      } )
    })

  }

  deleteImg(url){   //видалення картинки з firebase
    return this.storage.refFromURL(url).delete();
  }

}
