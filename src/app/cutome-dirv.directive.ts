import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCutomeDirv]'
})

export class CutomeDirvDirective{

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string = "transparent";
  @Input() highlight: string = "";

  @HostBinding('style.backgroundColor') background: string = this.defaultColor;

  @HostListener('mouseenter') onMouseEnter() {
    this.background = this.highlight;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.background = this.defaultColor;
  }
}

