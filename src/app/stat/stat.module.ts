import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatRoutingModule } from './stat-routing.module';
import { SelectorComponent } from './selector/selector.component';
import { StatComponent } from './stat.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { SynthesisComponent } from './visualization/synthesis/synthesis.component';
import {GraphComponent} from "./visualization/graph/graph.component";
import { ExerciceStoreDirective } from './exercice-store.directive';

@NgModule({
  imports: [
    CommonModule,
    StatRoutingModule
  ],
  declarations: [
    GraphComponent,
    SelectorComponent,
    StatComponent,
    VisualizationComponent,
    SynthesisComponent,
    ExerciceStoreDirective
  ]
})
export class StatModule { }
