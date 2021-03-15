import { Component, OnInit } from '@angular/core';
import { IBlog } from '../../interfaces/blog';
import { PagesService } from '../../services/pages.service';
import { VariablesService } from '../../services/variables.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['../../../assets/modal.scss']
})
export class EditPostComponent implements OnInit {
  arrBlogs: Array<IBlog> = [];

  constructor(private pageService: PagesService, public varService: VariablesService) { }
  ngOnInit(): void {
  }

  closeEditPost(): void{
    this.varService.visEditPost = false;
  }
  saveEditPost(): void{
    this.pageService.editBlog(this.varService.indexEditPost, this.varService.titleEditPost, this.varService.textEditPost);
    this.varService.visEditPost = false;
  }
}
