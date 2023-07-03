import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCentresCxComponent } from './list-centres-cx/list-centres-cx.component';

const routes: Routes = [
  {
    path: '',
    component: ListCentresCxComponent,
    data: {
      title: 'List Centres',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentresRoutingModule { }
