import { Pipe, PipeTransform } from '@angular/core';
import {Record} from "./record";

@Pipe({
  name: 'filterExerciceByCategory'
})
export class FilterExerciceByCategoryPipe implements PipeTransform {

  transform(value: Record[], category: string): Record[] {
    if (!value || !category) {
      return value;
    }
    return value.filter(r => r.category === category);
  }

}
