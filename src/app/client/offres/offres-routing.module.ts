import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOffrseCxComponent } from './list-offrse-cx/list-offrse-cx.component';

const routes: Routes = [
  {
    path: '',
    component: ListOffrseCxComponent,
    data: {
      title: 'List Offrses',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffresRoutingModule { }
