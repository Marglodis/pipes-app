import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
  standalone: false
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy?:keyof Hero | ''): Hero[] {
    if (!sortBy) {
      return heroes;
    }
    return heroes.slice().sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      if (a[sortBy] === b[sortBy]) {
        return 0;
      }
      return -1;
    });
    
  }

}
