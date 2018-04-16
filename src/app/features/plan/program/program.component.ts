import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProgramService } from '../../../shared/program/program.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Exercice } from '../../../shared/program/exercice';
import { Program } from '../../../shared/program/program';
import { FormUtils } from '../../../shared/utils/form-utils';

const errorMessage = {
  nameRequired: 'le nom du programme est obligatoire'
};

@Component({
  selector: 'sp-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
  formProgram: FormGroup;
  indexOfProgram: number;
  exercices: Exercice[] = [];
  isExercicePopinOpen = false;

  constructor(private programService: ProgramService,
              private route: ActivatedRoute,
              private router: Router,
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
        .subscribe(p => {
          this.formProgram.patchValue({ name: p.name, description: p.description });
          this.exercices = p.exercices;
        }, () => {
          this.router.navigate(['/plan']);
        });
    }
  }

  save(): void {
    const program: Program = Object.assign({}, this.formProgram.value);
    program.exercices = this.exercices;

    if (this.indexOfProgram || this.indexOfProgram === 0) {
      this.programService.updateProgram(this.indexOfProgram, program);
    } else {
      this.programService.addProgram(program);
    }
    this.router.navigate(['/plan']);
  }

  cancel(): void {
    this.router.navigate(['/plan'])
  }

  openExerciceModal(): void {
    this.isExercicePopinOpen = true;
  }

  addExercice(exercice: Exercice): void {
    if (exercice) {
      this.exercices.push(exercice);
    }
    this.isExercicePopinOpen = false;
  }

  getTitle(): string {
    return FormUtils.formatTitleWithErrorMessages(this.formProgram, errorMessage);
  }

}
