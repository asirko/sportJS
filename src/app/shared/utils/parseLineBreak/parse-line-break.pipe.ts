import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseLineBreak'
})
export class ParseLineBreakPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\n/g, '<br>');
  }

}
