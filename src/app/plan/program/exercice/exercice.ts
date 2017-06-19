export class Exercice {
  category: ExerciceCategory;
  type: string;
  duration?: number;
  speed?: number;
  weigth?: number;
  nbRepetion?: number;
  nbMouvement?: number;
}

export const LESSON = 'LESSON';
export const CARDIO_TRAINING = 'CARDIO_TRAINING';
export const REINFORCEMENT = 'REINFORCEMENT';
export type ExerciceCategory = 'LESSON' | 'CARDIO_TRAINING' | 'REINFORCEMENT';
