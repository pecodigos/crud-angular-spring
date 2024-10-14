import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genre',
})
export class GenrePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch(value) {
      case 'Playstation 1': return 'code';
      case 'Nintendo Switch': return 'computer';
    }
    return 'code';
  }

}
