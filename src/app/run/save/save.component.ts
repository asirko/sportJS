import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Program } from '../../plan/program';
import { ProgramService } from '../../shared/program.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'sp-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {

  programs$: Observable<Program[]>;

  constructor (private programService: ProgramService,
               private fb: FormBuilder) {}

  ngOnInit (): void {
    this.programs$ = this.programService.findAllPlusEmpty();
  }

}
