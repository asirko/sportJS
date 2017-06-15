import { NgModule } from '@angular/core';

import { RootRoutingModule } from './root-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RootRoutingModule
  ],
  exports: [
    RootRoutingModule
  ],
  declarations: [HomeComponent]
})
export class RootModule { }
