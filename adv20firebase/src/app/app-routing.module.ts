import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBlogComponent } from './pages/admin-blog/admin-blog.component';
import { AdminCategoryComponent } from './pages/admin-category/admin-category.component';
import { AdminProduckComponent } from './pages/admin-produck/admin-produck.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'blog', component: BlogComponent },
  { path: 'admin', component: AdminComponent, children: [
    { path: '', redirectTo: 'category', pathMatch: 'full' },
    { path: 'category', component: AdminCategoryComponent },
    { path: 'products', component: AdminProduckComponent },
    { path: 'blogs', component: AdminBlogComponent }
  ]},
  { path: '**', redirectTo: 'admin'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
