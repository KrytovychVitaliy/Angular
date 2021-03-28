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
import { DeleteCategoryComponent } from './pages/delete-category/delete-category.component';
import { AdminProduckComponent } from './pages/admin-produck/admin-produck.component';
import { AddEditProductComponent } from './pages/add-edit-product/add-edit-product.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { UploadFileComponent } from './components/upload-file/upload-file.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent,
    AdminBlogComponent,
    AdminComponent,
    AdminCategoryComponent,
    AddEditCategoryComponent,
    FilterCategoryPipe,
    DeleteCategoryComponent,
    AdminProduckComponent,
    AddEditProductComponent,
    UploadFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
