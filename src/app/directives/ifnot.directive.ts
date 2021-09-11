import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {
  @Input('appIfnot') set ifNot(condition: boolean){
    if(!condition){
      //показать элемент
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      // скрыть
      this.viewContainer.clear()
    }
  }

//  templateRef - содержимое ng-template
//  viewContainer - указывает ng-template
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }

}
