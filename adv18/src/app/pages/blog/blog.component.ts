import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { IBlog } from '../../interfaces/blog.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  arrBlogs: Array<IBlog> = [];

  constructor( private blogsService: BlogService ) { }

  ngOnInit(): void {
    this.getBlogs();
  }
  private getBlogs(): void {
    this.blogsService.getJSONBlogs().subscribe(data => {
      this.arrBlogs = data;
    });
  }
}
