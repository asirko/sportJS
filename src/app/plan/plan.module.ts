import { NgModule } from '@angular/core';

import { PlanRoutingModule } from './plan-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProgramsComponent } from './programs/programs.component';
import { ProgramComponent } from './program/program.component';
import { ProgramService } from '../shared/program.service';
import { ExerciceComponent } from './program/exercice/exercice.component';

@NgModule({
  imports: [
    SharedModule,
    PlanRoutingModule
  ],
  declarations: [
    ProgramsComponent,
    ProgramComponent,
    ExerciceComponent
  ]
})
export class PlanModule { }
