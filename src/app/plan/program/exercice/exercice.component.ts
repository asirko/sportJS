import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CARDIO_TRAINING, Exercice, EXERCICE_TYPES, LESSON, REINFORCEMENT } from '../../../shared/program/exercice';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormUtils } from '../../../shared/utils/form-utils';

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

  @Output() exercice = new EventEmitter<Exercice>();
  exerciceForm: FormGroup;

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
    }, { validator: this.getValidator() });
  }

  resetForm() {
    this.exerciceForm.patchValue({
      type: '',
      duration: '',
      speed: '',
      weigth: '',
      nbRepetion: '',
      nbMouvement: ''
    });
  }

  private getValidator(): (fg: FormGroup)=> any {
    return fg => {
      if (!fg.get('category').value) {
        return {categoryRequired: true};
      }

      const errors: any = {};

      if (fg.get('category').value === LESSON) {
        if (!fg.get('type').value) {
          errors.typeRequired = true;
        }
        if (!fg.get('duration').value) {
          errors.durationRequired = true;
        }
      } else if (fg.get('category').value === CARDIO_TRAINING) {

      } else if (fg.get('category').value === REINFORCEMENT) {

      }

      return errors;
    }
  }

  // TODO: validation:
  // category === LESSON => 'type' et 'duration' obligatoire
  // category === CARDIO_TRAINING => 'type', 'duration' et 'speed' obligatoire
  // category === REINFORCEMENT => 'type', 'nbRepetion' et 'nbMouvement' obligatoire


  addExercice(): void {
    if (this.exerciceForm.valid) {
      this.exercice.emit(this.exerciceForm.value)
    }
  }

  close(): void {
    this.exercice.emit(null);
  }

  getTitle(): string {
    if (!this.exerciceForm.errors) {
      return '';
    }

    return Object.keys(this.exerciceForm.errors)
      .map(k => errorMessage[k])
      .join('\n')
  }

}
