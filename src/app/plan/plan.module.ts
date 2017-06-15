import { NgModule } from '@angular/core';

import { PlanRoutingModule } from './plan-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TestComponent } from './test/test.component';
import { ProgramsComponent } from './programs/programs.component';
import { ProgramComponent } from './program/program.component';

@NgModule({
  imports: [
    SharedModule,
    PlanRoutingModule
  ],
  declarations: [TestComponent, ProgramsComponent, ProgramComponent]
})
export class PlanModule { }
