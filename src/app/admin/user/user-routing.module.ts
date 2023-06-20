import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeComponent } from '../user/liste/liste.component';
import { AddComponent } from '../user/add/add.component';
import { UpdateComponent } from '../user/update/update.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ListeComponent,
    data: {
      title: 'Liste Category',
    },
  },
  {
    path: 'add',
    component: AddComponent,
    data: {
      title: 'Add Category',
    },
  },
  {
    path: 'update',
    component: UpdateComponent,
    data: {
      title: 'Update Category',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
