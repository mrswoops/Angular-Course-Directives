import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elemRef: ElementRef, private renderer: Renderer2) {}
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  ngOnInit() {
    /* this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue'); */
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    /* this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue'); */
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    /* this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'transparent'); */
    this.backgroundColor = this.defaultColor;
  }
}
