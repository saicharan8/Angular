import { Directive, ElementRef,Renderer} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef,public renderer:Renderer){ 
 this.renderer.setElementStyle(this.el.nativeElement,'background-color','lightgreen');

}
}