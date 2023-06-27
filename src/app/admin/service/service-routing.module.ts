import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeServiceComponent } from './liste-service/liste-service.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Service',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'lister',
      },
      {
        path: 'lister',
        component: ListeServiceComponent,
        data: {
          title: 'Lister Services',
        },
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceRoutingModule {}
