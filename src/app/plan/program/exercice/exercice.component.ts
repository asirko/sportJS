import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CARDIO_TRAINING, Exercice, EXERCICE_TYPES, LESSON, REINFORCEMENT } from './exercice';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormUtils } from '../../../shared/utils/form-utils';
import { parseErrorsFromMarkup } from 'tslint/lib/test/parse';

const errorMessage = {
  categoryRequired: 'il faut choisir entre cours, cardio et renforcement',
  typeRequired: 'le type est obligatoire',
  durationRequired: 'la durée est obligatoire',
  speedRequired: 'la vitesse est obligatoire',
  nbRepetionRequired: 'le nombre de répétitions est obligatoire',
  nbMouvementRequired: 'le nombre de mouvements est obligatoire'
};

@Component({
  selector: 'sp-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.scss']
})
export class ExerciceComponent implements OnInit {

  @Output() exercice$ = new EventEmitter<Exercice>();
  exerciceForm: FormGroup;

  get exerciceTypes(): string[] {
    if (!this.exerciceForm.value.category) {
      return [];
    }
    return EXERCICE_TYPES[this.exerciceForm.value.category];
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.exerciceForm = this.fb.group({
      category: '',
      type: '',
      duration: '',
      speed: '',
      weigth: '',
      nbRepetion: '',
      nbMouvement: '',
      comment: ''
    }, { validator: this.crossFieldValidation() });
  }

  resetForm(): void {
    this.exerciceForm.patchValue({
      type: '',
      duration: '',
      speed: '',
      weigth: '',
      nbRepetion: '',
      nbMouvement: '',
      comment: ''
    });
  }

  crossFieldValidation() {
    return (group: FormGroup): {[key: string]: any} => {
      const errors: any = {};
      const category = group.controls['category'].value;

      if (!category) {
        errors.categoryRequired = true;
      } else if (category === LESSON) {
        Object.assign(errors, this.fieldRequired(group, 'type', 'duration'));
      } else if (category === CARDIO_TRAINING) {
        Object.assign(errors, this.fieldRequired(group, 'type', 'duration', 'speed'));
      } else if (category === REINFORCEMENT) {
        Object.assign(errors, this.fieldRequired(group, 'type', 'nbRepetion', 'nbMouvement'));
      }

      return errors;
    }
  }

  fieldRequired(group: FormGroup, ...fields: string[]): any {
    const errors = {};
    fields.forEach(field => {
      const fieldValue = group.controls[field].value;
      if (!fieldValue) {
        errors[field + 'Required'] = true;
      }
    });

    return errors
  }

  addExercice(): void {
    if (this.exerciceForm.valid) {
      this.exercice$.emit(this.exerciceForm.value);
    }
  }

  cancel(): void {
    this.exercice$.emit(null);
  }

  getTitle(): string {
    return FormUtils.formatTitleWithErrorMessages(this.exerciceForm, errorMessage);
  }

}
