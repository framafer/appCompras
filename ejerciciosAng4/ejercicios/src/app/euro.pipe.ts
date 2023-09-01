import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euro'
})
export class EuroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const euro = value + ' €';
    return euro;
  }

}


