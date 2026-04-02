import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true,
})
export class ReversePipe implements PipeTransform {
  //Aquí lo que estamos haciendo es tomar el valor de entrada, dividirlo en caracteres, invertir el orden de los caracteres y luego unirlos nuevamente para obtener la cadena invertida.
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
