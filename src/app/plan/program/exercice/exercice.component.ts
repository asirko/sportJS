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

  constructor() { }

  ngOnInit() {
    // fields:
    // - category
    // - type
    // - duration
    // - speed
    // - weigth
    // - nbRepetion
    // - nbMouvement
    // - comment
  }

  // TODO: validation:
  // category === LESSON => 'type' et 'duration' obligatoire
  // category === CARDIO_TRAINING => 'type', 'duration' et 'speed' obligatoire
  // category === REINFORCEMENT => 'type', 'nbRepetion' et 'nbMouvement' obligatoire


  addExercice(): void {
  }

  close(): void {
  }

  getTitle(): string {
    return null;
  }

}
