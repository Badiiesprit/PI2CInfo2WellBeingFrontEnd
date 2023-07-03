import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffresRoutingModule } from './offres-routing.module';
import { ListOffrseCxComponent } from './list-offrse-cx/list-offrse-cx.component';


@NgModule({
  declarations: [
    ListOffrseCxComponent
  ],
  imports: [
    CommonModule,
    OffresRoutingModule
  ]
})
export class OffresModule { }
