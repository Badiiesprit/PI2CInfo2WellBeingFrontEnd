

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// views
import { ListeComponent } from './liste/liste.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
// Components Routing
import { CenterRoutingModule } from './center-routing.module';
// utils
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule,
  SpinnerModule,
  AlertModule
} from '@coreui/angular';
@NgModule({
  declarations: [
    ListeComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    CenterRoutingModule,
    CommonModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FormModule,
    GridModule,
    ListGroupModule,
    SharedModule,
    FormsModule,
    SpinnerModule,
    AlertModule
  ]
})
export class CenterModule { }
