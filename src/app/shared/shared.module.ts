import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PopinComponent } from './popin/popin.component';
import { AutoFocusDirective } from './auto-focus/auto-focus.directive';
import { ProgramService } from './program/program.service';
import { RecordService } from './record/record.service';
import { FilterRecordByCategoryPipe } from './record/filter-record-by-category.pipe';
import { ParseLineBreakPipe } from './utils/parseLineBreak/parse-line-break.pipe';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
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
    HttpClientModule,
    PopinComponent,
    AutoFocusDirective,
    FilterRecordByCategoryPipe,
    ParseLineBreakPipe
  ],
  providers: [ ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptorService,
          multi: true
        },
        ProgramService,
        RecordService,
        UserService,
        AuthGuard
      ]
    };
  }
}
