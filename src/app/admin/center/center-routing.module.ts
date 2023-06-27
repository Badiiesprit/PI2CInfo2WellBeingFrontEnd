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
      title: 'Liste Center',
    },
  },
  {
    path: 'add',
    component: AddComponent,
    data: {
      title: 'Add Center',
    },
  },
  {
    path: 'update/:id',
    component: UpdateComponent,
    data: {
      title: 'Update Center',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CenterRoutingModule { }
