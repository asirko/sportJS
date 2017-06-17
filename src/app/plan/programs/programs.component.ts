import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ProgramService } from '../program.service';
import { Program } from '../program';

@Component({
  selector: 'sp-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  programs$: Observable<Program>;

  constructor(private programService: ProgramService) { }

  ngOnInit() {
    this.programs$ = this.programService.findAll();
  }

}
