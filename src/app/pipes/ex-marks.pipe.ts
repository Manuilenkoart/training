import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'exMark'
})
export class ExMarksPipe implements PipeTransform{
  transform(str: string): string {
  return `${str.trim()}!!!`
  }

}
