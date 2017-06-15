import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnknownComponent } from './unknown/unknown.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'plan',
  loadChildren: 'app/plan/plan.module#PlanModule'
}, {
  path: 'run',
  loadChildren: 'app/run/run.module#RunModule'
}, {
  path: '**',
  component: UnknownComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
