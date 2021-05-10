import { Component, OnInit } from '@angular/core';
import { UploadImgService } from 'src/app/shared/services/upload-img.service';
import { ModalAddEditeService } from 'src/app/shared/services/modal-add-edite.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(
    public modalService: ModalAddEditeService,
    public uploadService: UploadImgService,
  ) { }

  ngOnInit(): void {
  }

  progressActivate(): void{
    this.uploadService.progressActive = false;
  }

  uploadFile(event): void{
    this.uploadService.progressActive = true;

    if (event.target.files[0]){
      if (this.uploadService.productImage){   //якщо редагування/заміна фото = видалення попереднього фото
        this.uploadService.deleteImg(this.uploadService.productImage);
        this.uploadService.productImage = '';
      };

    this.uploadService.saveImg(event);
    }
  }
}
