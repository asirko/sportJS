import { NgModule } from '@angular/core';

import { RunRoutingModule } from './run-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RunRoutingModule
  ],
  declarations: []
})
export class RunModule { }
