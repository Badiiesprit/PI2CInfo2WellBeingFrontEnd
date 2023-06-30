import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// views
import { ListeComponent } from './liste/liste.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
// Components Routing
import { CategoryRoutingModule } from './category-routing.module';
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
  AlertModule,
  TooltipModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ShowComponent } from './show/show.component';
@NgModule({
  declarations: [
    ListeComponent,
    AddComponent,
    UpdateComponent,
    ShowComponent
  ],
  imports: [
    CategoryRoutingModule,
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
    AlertModule,
    IconModule,
    TooltipModule
  ]
})
export class CategoryModule { }
