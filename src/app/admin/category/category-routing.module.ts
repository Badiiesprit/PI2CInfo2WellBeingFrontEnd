import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ShowComponent } from './show/show.component';

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
    path: 'update/:id',
    component: UpdateComponent,
    data: {
      title: 'Update Category',
    },
  },
  {
    path: 'show/:id',
    component: ShowComponent,
    data: {
      title: 'Show Category',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule { }
