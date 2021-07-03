import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {
  @Input() important: boolean;

  constructor(private el: ElementRef) {    
  }

  ngAfterViewInit() {
    if (this.important) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    }
  }
}