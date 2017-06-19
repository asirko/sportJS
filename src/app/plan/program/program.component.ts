import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProgramService } from '../program.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sp-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
  formProgram: FormGroup;
  indexOfProgram: number;

  constructor(private programService: ProgramService,
              private route: ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.indexOfProgram = this.route.snapshot.params['id'];
    this.initForm();
  }

  private initForm(): void {
    this.formProgram = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });

    if (this.indexOfProgram || this.indexOfProgram === 0) {
      this.programService
        .getProgramByIndex(this.indexOfProgram)
        .subscribe(p => this.formProgram.patchValue(p));
    }
  }

  save(): void {
    if (this.indexOfProgram || this.indexOfProgram === 0) {
      this.programService.updateProgram(this.indexOfProgram, this.formProgram.value);
    } else {
      this.programService.addProgram(this.formProgram.value);
    }
  }

}
