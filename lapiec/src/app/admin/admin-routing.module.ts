import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminSalesComponent } from './admin-sales/admin-sales.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children:[
      {
        path: 'category',
        component: AdminCategoryComponent
      },
      {
        path: 'products',
        component: AdminProductsComponent
      },
      {
        path: 'sales',
        component: AdminSalesComponent
      },
      {
        path: 'order',
        component: AdminSalesComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'category'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
