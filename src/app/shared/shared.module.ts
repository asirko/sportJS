import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PopinComponent } from './popin/popin.component';
import { AutoFocusDirective } from './auto-focus/auto-focus.directive';
import { ProgramService } from './program/program.service';
import { RecordService } from './record/record.service';
import { FilterRecordByCategoryPipe } from './record/filter-record-by-category.pipe';
import { ParseLineBreakPipe } from './utils/parseLineBreak/parse-line-break.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    PopinComponent,
    AutoFocusDirective,
    FilterRecordByCategoryPipe,
    ParseLineBreakPipe
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    PopinComponent,
    AutoFocusDirective,
    FilterRecordByCategoryPipe,
    ParseLineBreakPipe
  ],
  providers: [
    ProgramService,
    RecordService
  ]
})
export class SharedModule { }
