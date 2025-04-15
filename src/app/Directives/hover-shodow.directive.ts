import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[HoverShodow]'
})
export class HoverShodowDirective {

  constructor(private elementRef : ElementRef) {
    this.elementRef.nativeElement.style.boxShadow = 'none';
  }

  @HostListener ('mouseover') onMouseOver(){
    this.elementRef.nativeElement.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.3)';
  }

  @HostListener('mouseout') onMouseOut(){
    this.elementRef.nativeElement.style.boxShadow = 'none';
  }
}
