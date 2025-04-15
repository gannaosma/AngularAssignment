import { not } from '@angular/compiler/src/output/output_ast';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egyptianIDDate'
})
export class EgyptianIDDatePipe implements PipeTransform {

  transform(idNumber: number, datePart: 'YY' | 'MM' | 'DD' | 'FullDate'): string | null  {
    //30005101100142
    var strnumber = idNumber.toString()
    var year =  strnumber.substring(1,3)
    var month = strnumber.substring(3,5) 
    var day =strnumber.substring(5,7) 

    if(datePart == 'YY')
    {
      if(strnumber.charAt(0) == '3')
      {
        return '20' + year
      }
      else
      {
        return '19' + year
      }
    }
    else if(datePart == 'MM')
      return month
    else if(datePart == 'DD')
      return day
    else
    {
      if(strnumber.charAt(0) == '3')
        {
          return `${day}/${month}/20${year}`
        }
        else
        {
          return `${day}/${month}/19${year}`
        }
    }
  }

}
