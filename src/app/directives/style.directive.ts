import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  constructor(private elRef: ElementRef,
              private renderer: Renderer2) {
  }

  @HostListener('click', ['$event.target']) onClick(event: Event): void {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue');
  }
  @HostListener('mouseleave') onLeave(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', null);
  }
}
