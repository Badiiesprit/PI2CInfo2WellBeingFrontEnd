import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { ListeServiceComponent } from './liste-service/liste-service.component';

// Theme Routing
import { ServiceRoutingModule } from './service-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ServiceRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule
  ],
  declarations: [
  ListeServiceComponent,
  ]
})
export class ServiceModule {
}
