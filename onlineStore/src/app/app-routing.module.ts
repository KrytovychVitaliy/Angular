import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketPageComponent } from './pages/basket-page/basket-page.component';
import { CheckInComponent } from './pages/check-in/check-in.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';
import { ProductsComponent } from './pages/products/products.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignOutComponent } from './pages/sign-out/sign-out.component';
import { UsersPageCommentsComponent } from './pages/users-page-comments/users-page-comments.component';
import { UsersPageDataComponent } from './pages/users-page-data/users-page-data.component';
import { UsersPageOrdersComponent } from './pages/users-page-orders/users-page-orders.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { AuthActivateGuard } from './shared/guards/auth-activate.guard';
import { AuthAdminActivateGuard } from './shared/guards/auth-admin-activate.guard';
import { AuthNoActivateGuard } from './shared/guards/auth-no-activate.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:category', component: ProductsComponent },
  { path: 'products/:category/:id', component: ProductsDetailsComponent },
  { path: 'basket', component: BasketPageComponent },
  { path: 'signIn', component: SignInComponent, canActivate: [AuthNoActivateGuard] },
  { path: 'signOut', component: SignOutComponent, canActivate: [AuthActivateGuard] },
  { path: 'checkIn', component: CheckInComponent, canActivate: [AuthNoActivateGuard] },
  { path: 'users', component: UsersPageComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'orders' },
      { path: 'orders', component: UsersPageOrdersComponent },
      { path: 'comments', component: UsersPageCommentsComponent },
      { path: 'data', component: UsersPageDataComponent }
    ]
  },
  { path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule), canLoad: [AuthAdminActivateGuard]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
