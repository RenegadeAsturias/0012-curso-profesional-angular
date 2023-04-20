import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estados'
})
export class EstadosPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const texto = value === 0 ? 'PENDIENTE' : 'REGISTRADO';
    return texto;
  }

}
