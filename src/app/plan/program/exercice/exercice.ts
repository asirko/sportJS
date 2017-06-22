export class Exercice {
  category: ExerciceCategory;
  type: string;
  duration?: number;
  speed?: number;
  weigth?: number;
  nbRepetion?: number;
  nbMouvement?: number;
  comment?: string;
}

export const LESSON = 'LESSON';
export const CARDIO_TRAINING = 'CARDIO_TRAINING';
export const REINFORCEMENT = 'REINFORCEMENT';
export type ExerciceCategory = 'LESSON' | 'CARDIO_TRAINING' | 'REINFORCEMENT';

export const EXERCICE_TYPES = {
  LESSON: ['Hiit', 'Abdo', 'Pilate', 'Stretching', 'Bike', 'Eliptik', 'Treck'],
  CARDIO_TRAINING: ['Rameurs', 'Tapis', 'Vélo', 'Eliptik'],
  REINFORCEMENT: ['Low Row', 'V21', 'V23', 'V26']
};
