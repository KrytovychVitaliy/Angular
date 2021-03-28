import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/interfaces/blog.interface';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/models/blog.model';
import { Uuidv4Service } from 'src/app/services/uuidv4.service';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss'],
})
export class AdminBlogComponent implements OnInit {
  title = '';
  text = '';
  autor = '';
  nameBut = 'Add';
  editObj: IBlog = { // для редагування наявного постa
    autor: "",
    title: "",
    text: "",
    image: "",
    id: null
  };
  editBlog = ""; // для ідентифікації - чи вноситься новий пост, чи відбувається редагування наявного
  arrBlogs: Array<IBlog> = [];

  constructor(
    private blogsService: BlogService,
    private uuidv4Service: Uuidv4Service,
    public uploadFileService: UploadFileService
    ) { }

  ngOnInit(): void {
    this.getBlogs();
  }
  private getBlogs(): void {
    this.blogsService.getJSONBlogs().subscribe(data => {
      this.arrBlogs = data;
    });
  }


  add(): void {
    if (this.title && this.text && this.autor && this.uploadFileService.productImage) { // якщо заповнено всі 3 поля     
      if (this.editBlog) { // якщо відбувається редагування
        this.editObj.autor = this.autor;
        this.editObj.title = this.title;
        this.editObj.text = this.text;
        this.editObj.id = this.editBlog;
        this.editObj.image = this.uploadFileService.productImage;
        this.editObj.date = new Date();
        this.blogsService.updateJSONBlogs(this.editObj).subscribe(
          () => { this.getBlogs(); }
        );
        this.clea();
        this.nameBut = 'Add';
      } else { // якщо вноситься новий пост
        const newPost = new Blog (
          this.autor,
          this.title,
          this.text,
          new Date(),
          this.uploadFileService.productImage,
          this.uuidv4Service.uuidv4()
          );
        this.blogsService.postJSONBlogs(newPost).subscribe(
          () => { this.getBlogs(); }
        );
        this.clea();
      }
    }

    this.uploadFileService.productImage = '';
    this.uploadFileService.progressActive = false;
  }

  deleteUser(hostIndex, imgUrl): void {
    this.blogsService.deleteJSONBlogs(hostIndex).subscribe(
      () => { this.getBlogs(); }
    );
    this.uploadFileService.deleteImg(imgUrl);   //видалення картинки з firebase
    this.clea();   // якщо нажато в режимі редагування
  }

  editUser(index, hostIndex): void {
    this.editBlog = hostIndex.id;
    this.nameBut = 'Save edit';
    this.title = this.arrBlogs[index].title;
    this.text = this.arrBlogs[index].text;
    this.autor = this.arrBlogs[index].autor;
    this.uploadFileService.productImage = this.arrBlogs[index].image;
  }

  clea(): void { // обнулення
    this.title = "";
    this.text = "";
    this.autor = "";
    this.editBlog = "";
    this.editObj = {
      autor: "",
      title: "",
      text: "",
      image: "",
      id: null
    };
  }
 
}
