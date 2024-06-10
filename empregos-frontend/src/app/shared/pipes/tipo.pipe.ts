import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Desenvolvimento': return 'code';
      case 'outros': return 'computer';
    }
    return 'computer';
  }
}
