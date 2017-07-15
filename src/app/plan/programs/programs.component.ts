import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ProgramService } from '../../shared/program/program.service';
import { Program } from '../../shared/program/program';

@Component({
  selector: 'sp-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  programs$: Observable<Program[]>;

  constructor(private programService: ProgramService) { }

  ngOnInit() {
    this.programs$ = this.programService.findAll();
  }

  deleteProgram(index: number): void {
    this.programService.deleteProgram(index);
    this.programs$ = this.programService.findAll();
  }

}
