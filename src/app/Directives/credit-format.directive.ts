import { Directive, ElementRef, HostListener } from '@angular/core';
import { CreditformatPipe } from '../Pipe/creditformat.pipe';

@Directive({
  selector: '[CreditFormat]',
  providers: [CreditformatPipe]
})
export class CreditFormatDirective {

  constructor(private elementRef: ElementRef, private customPip: CreditformatPipe) { }

  @HostListener ('blur') onBlur(){
    var value  = this.elementRef.nativeElement.value;

    if(value.length == 16)
    {
      this.elementRef.nativeElement.style.backgroundColor = 'gray';
      this.elementRef.nativeElement.value = this.customPip.transform(value);
    }
    else
      this.elementRef.nativeElement.style.backgroundColor = 'red'      
  }
}
