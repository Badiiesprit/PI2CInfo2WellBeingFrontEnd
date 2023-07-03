import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from './index/index.component'

import { HomecxRoutingModule } from './homecx-routing.module';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    HomecxRoutingModule
  ]
})
export class HomecxModule { }
