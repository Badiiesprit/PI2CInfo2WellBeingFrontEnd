import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListServiceCxComponent } from './list-service-cx/list-service-cx.component';

const routes: Routes = [
  {
    path: '',
    component: ListServiceCxComponent,
    data: {
      title: 'List Offrses',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
