import {HeartBeat} from "./heart-beat";
import {ExerciceCategory} from "./exercice";

export class Record {
  // timestamp of beginning of the exercice
  date: number;
  program: number;
  category: ExerciceCategory;
  type: string;
  heartBeats: HeartBeat[];
}
