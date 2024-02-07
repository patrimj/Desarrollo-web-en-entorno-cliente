import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hola',
  standalone: true
})
export class HolaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
