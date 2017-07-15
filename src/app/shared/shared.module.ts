import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PopinComponent } from './popin/popin.component';
import { AutoFocusDirective } from './auto-focus/auto-focus.directive';
import { ProgramService } from './program/program.service';
import { ExerciceService } from './exercice/exercice.service';
import { FilterExerciceByCategoryPipe } from './exercice/filter-exercice-by-category.pipe';
import { ParseLineBreakPipe } from './utils/parseLineBreak/parse-line-break.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    PopinComponent,
    AutoFocusDirective,
    FilterExerciceByCategoryPipe,
    ParseLineBreakPipe
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    PopinComponent,
    AutoFocusDirective,
    FilterExerciceByCategoryPipe,
    ParseLineBreakPipe
  ],
  providers: [
    ProgramService,
    ExerciceService
  ]
})
export class SharedModule { }
