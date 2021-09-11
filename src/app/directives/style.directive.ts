import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color: string = 'blue'
  @Input() fontWeight = 'normal'
  @Input() dStyles: {border?: string, fontWeight?: string, borderRadius?: string}

  @HostBinding('style.color') elColor = null
  @HostBinding('style.fontWeight') elFontWeight = null
  @HostBinding('style.border') elBorder = null
  @HostBinding('style.borderRadius') elBorderRadius = null

  constructor(private elRef: ElementRef,
              private renderer: Renderer2) {
  }

  @HostListener('click', ['$event.target']) onClick(event: Event): void {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter(): void {
    this.elColor = this.color
    this.elFontWeight = this.fontWeight
    this.elBorder = this.dStyles.border
    this.elBorderRadius = this.dStyles.borderRadius
//альтернатива
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', this.color);
    // this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', this.fontWeight);
    // this.renderer.setStyle(this.elRef.nativeElement, 'border', this.dStyles.border);
    // this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius', this.dStyles.borderRadius);
  }

  @HostListener('mouseleave') onLeave(): void {
    this.elColor = null
    this.elFontWeight = null
    this.elBorder = null
    this.elBorderRadius = null
    //альтернатива
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', null);
    // this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', null);
    // this.renderer.setStyle(this.elRef.nativeElement, 'border', null);
    // this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius', null);
  }
}
