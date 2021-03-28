import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { Uuidv4Service } from 'src/app/services/uuidv4.service';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  uploadProgress: Observable<number>;

  constructor(
    private uuidv4Service: Uuidv4Service,
    public modalService: ModalService,
    public uploadFileService: UploadFileService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void{
  }


  progressActivate(): void{
    this.uploadFileService.progressActive = false;
  }

  uploadFile(event): void{
    this.uploadFileService.progressActive = true;

    if (event.target.files[0]){
      if (this.uploadFileService.productImage){   //якщо редагування/заміна фото = видалення попереднього фото
        this.uploadFileService.deleteImg(this.uploadFileService.productImage);
        this.uploadFileService.productImage = '';
      };
      const file = event.target.files[0];
      const fileName = this.uuidv4Service.uuidv4();
      const fileType = file.type.split('/')[1];
      let dirPath: string;

      if (event.path[3].id === 'uploadBlogs') {
        dirPath = 'imagesBlogs';
      };
      if (event.path[3].id === 'uploadProducts') {
        dirPath = 'imagesProducts';
      }

      const filePath = `${dirPath}/${fileName}.${fileType}`;
      const task = this.storage.upload(filePath, file);
      this.uploadProgress = task.percentageChanges();
      task.then( result => {
        this.storage.ref(`${dirPath}/${result.metadata.name}`).getDownloadURL()
        .subscribe( img => {
          this.uploadFileService.productImage = img;
        } )
      })
    }
  }

}
