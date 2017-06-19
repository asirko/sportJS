import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PopinComponent } from './popin/popin.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    PopinComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    PopinComponent
  ]
})
export class SharedModule { }
