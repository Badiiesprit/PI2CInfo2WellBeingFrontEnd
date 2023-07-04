import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from './index/index.component'

import { HomecxRoutingModule } from './homecx-routing.module';
import { CarouselCxComponent } from './carousel-cx/carousel-cx.component';
import {
  CarouselModule
} from '@coreui/angular';

@NgModule({
  declarations: [IndexComponent, CarouselCxComponent],
  imports: [
    CommonModule,
    HomecxRoutingModule,
    CarouselModule
  ]
})
export class HomecxModule { }
