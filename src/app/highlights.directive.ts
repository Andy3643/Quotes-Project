import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {
  


  constructor(elem:ElementRef) {
    elem.nativeElement.style.backgroundColor= "grey"
   }

}
