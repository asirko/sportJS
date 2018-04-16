import { NgModule } from '@angular/core';

import { RunRoutingModule } from './run-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SaveComponent } from './save/save.component';

@NgModule({
  imports: [
    SharedModule,
    RunRoutingModule
  ],
  declarations: [SaveComponent]
})
export class RunModule { }
