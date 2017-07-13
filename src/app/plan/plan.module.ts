import { NgModule } from '@angular/core';

import { PlanRoutingModule } from './plan-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProgramsComponent } from './programs/programs.component';
import { ProgramComponent } from './program/program.component';
import { ExerciceComponent } from './program/exercice/exercice.component';
import { ExercicesListComponent } from './program/exercices-list/exercices-list.component';

@NgModule({
  imports: [
    SharedModule,
    PlanRoutingModule
  ],
  declarations: [
    ProgramsComponent,
    ProgramComponent,
    ExerciceComponent,
    ExercicesListComponent
  ]
})
export class PlanModule { }
