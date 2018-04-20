import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnknownComponent } from './unknown/unknown.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../shared/auth.guard';
import { LayoutComponent } from './layout/layout.component';


// todo use a layout instead of polluting app.component
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }, {
        path: 'home',
        component: HomeComponent
      }, {
        path: 'login',
        component: LoginComponent
      }, {
        path: 'plan',
        loadChildren: 'app/features/plan/plan.module#PlanModule',
        canActivate: [AuthGuard]
      }, {
        path: 'run',
        loadChildren: 'app/features/run/run.module#RunModule',
        canActivate: [AuthGuard]
      }, {
        path: 'stat',
        loadChildren: 'app/features/stat/stat.module#StatModule',
        canActivate: [AuthGuard]
      },
    ]
  }, {
    path: '**',
    component: UnknownComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
