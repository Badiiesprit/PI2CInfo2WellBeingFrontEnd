import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ListBlogCxComponent } from './list-blog-cx/list-blog-cx.component';


@NgModule({
  declarations: [
    ListBlogCxComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
