import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AdminBlogComponent } from './pages/admin-blog/admin-blog.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminCategoryComponent } from './pages/admin-category/admin-category.component';
import { AddEditCategoryComponent } from './pages/add-edit-category/add-edit-category.component';
import { FilterCategoryPipe } from './pipe/filter-category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent,
    AdminBlogComponent,
    AdminComponent,
    AdminCategoryComponent,
    AddEditCategoryComponent,
    FilterCategoryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
