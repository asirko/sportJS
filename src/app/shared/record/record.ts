import {HeartBeat} from "./heart-beat";
import {ExerciceCategory} from "../program/exercice";

export class Record {
  // timestamp of beginning of the record
  date: number;
  program: number;
  category: ExerciceCategory;
  type: string;
  heartBeats: HeartBeat[];
}
