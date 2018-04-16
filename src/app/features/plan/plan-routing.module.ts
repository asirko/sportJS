import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramsComponent } from './programs/programs.component';
import { ProgramComponent } from './program/program.component';

const routes: Routes = [{
    path: '',
    component: ProgramsComponent
  }, {
    path: 'detail',
    component: ProgramComponent
  }, {
    path: 'detail/:id',
    component: ProgramComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule { }
