import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditformat'
})
export class CreditformatPipe implements PipeTransform {

  transform(credit: string, ...args: unknown[]): string {
    return credit.replace(/(\d{4})(?=\d)/g, '$1-') ;
  }

}
