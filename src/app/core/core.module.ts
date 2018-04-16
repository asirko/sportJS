import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { UnknownComponent } from './unknown/unknown.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ConnectionButtonComponent } from './connection-button/connection-button.component';
import { SecurityModule } from './security/security.module';

@NgModule({
  imports: [
    SharedModule,
    // todo use httpClient instead of deprecated http
    // todo use httpInterceptors instead of a custom http service
    HttpModule,
    BrowserModule,
    CoreRoutingModule,
    SecurityModule
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
    ConnectionButtonComponent
  ]
})
export class CoreModule { }
