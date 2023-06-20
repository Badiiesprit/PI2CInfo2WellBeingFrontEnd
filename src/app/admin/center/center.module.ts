import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// views
import { ListeComponent } from './liste/liste.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
// Components Routing
import { CenterRoutingModule } from './center-routing.module';
// utils
//import { DocsComponentsModule } from '@docs-components/docs-components.module';

@NgModule({
  declarations: [
    ListeComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    CenterRoutingModule,
    //DocsComponentsModule
  ]
})
export class CenterModule { }
