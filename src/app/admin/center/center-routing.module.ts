import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';

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
export class CenterRoutingModule { }
