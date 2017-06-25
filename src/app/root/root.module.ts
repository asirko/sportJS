import { NgModule } from '@angular/core';

import { RootRoutingModule } from './root-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { UnknownComponent } from './unknown/unknown.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ConnectionButtonComponent } from './connection-button/connection-button.component';

@NgModule({
  imports: [
    SharedModule,
    HttpModule,
    BrowserModule,
    RootRoutingModule
  ],
  exports: [
    RootRoutingModule,
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
export class RootModule { }
