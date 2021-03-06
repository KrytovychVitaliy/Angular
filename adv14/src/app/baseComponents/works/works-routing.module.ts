import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorksComponent } from './works.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: '',
    pathMatch: 'full',
    component: WorksComponent
  },
  {
    path: 'task-list',
    loadChildren: () => import('../../pages/task-list/task-list.module').then(m => m.TaskListModule)
  },
  {
    path: 'users-list',
    loadChildren: () => import('../../pages/users-list/users-list.module').then(m => m.UsersListModule)
  },
  {
    path: 'word-filter',
    loadChildren: () => import('../../pages/word-filter/word-filter.module').then(m => m.WordFilterModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksRoutingModule { }
