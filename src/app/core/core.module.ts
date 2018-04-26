import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { UnknownComponent } from './unknown/unknown.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { ConnectionButtonComponent } from './connection-button/connection-button.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    BrowserModule,
    CoreRoutingModule
  ],
  exports: [
    CoreRoutingModule,
    HeaderComponent,
    ConnectionButtonComponent
  ],
  declarations: [
    HomeComponent,
    UnknownComponent,
    HeaderComponent,
    ConnectionButtonComponent,
    LoginComponent,
    LayoutComponent
  ]
})
export class CoreModule { }
