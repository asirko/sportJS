import { NgModule } from '@angular/core';

import { PlanRoutingModule } from './plan-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProgramsComponent } from './programs/programs.component';
import { ProgramComponent } from './program/program.component';

@NgModule({
  imports: [
    SharedModule,
    PlanRoutingModule
  ],
  declarations: [ProgramsComponent, ProgramComponent]
})
export class PlanModule { }
