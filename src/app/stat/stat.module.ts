import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatRoutingModule } from './stat-routing.module';
import { GraphComponent } from './graph/graph.component';
import { SelectorComponent } from './selector/selector.component';
import { StatComponent } from './stat.component';

@NgModule({
  imports: [
    CommonModule,
    StatRoutingModule
  ],
  declarations: [GraphComponent, SelectorComponent, StatComponent]
})
export class StatModule { }
