import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeComponent } from './liste/liste.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    ListeComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
