import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../../environments/environment';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { ModalCategoryComponent } from './modal-category/modal-category.component';
import { ModalProductComponent } from './modal-product/modal-product.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
import { UploadComponent } from './upload/upload.component';
import { FilterCategoryPipe } from './pipes/filter-category.pipe';
import { UsersComponent } from './users/users.component';
import { CommentsComponent } from './comments/comments.component';
import { FilterNamePipe } from './pipes/filter-name.pipe';


@NgModule({
  declarations: [
    AdminComponent,
       AdminCategoriesComponent,
       AdminProductsComponent,
       AdminOrdersComponent,
       ModalCategoryComponent,
       ModalProductComponent,
       ModalDeleteComponent,
       UploadComponent,
       FilterNamePipe,
       FilterCategoryPipe,
       UsersComponent,
       CommentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    AdminRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    HttpClientModule
  ]
})
export class AdminModule { }
