import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBlogCxComponent } from './list-blog-cx/list-blog-cx.component';

const routes: Routes = [
  {
    path: '',
    component: ListBlogCxComponent,
    data: {
      title: 'List Blog',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
