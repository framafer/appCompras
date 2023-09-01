import { Directive, ElementRef } from '@angular/core';
import { HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMenuitem]'
})
export class MenuitemDirective {

  @HostBinding('class.itemOrange')
  private mostrar:boolean = false;

   
  @HostListener('mouseover') onOver() {
    this.mostrar = true;
  }
  @HostListener('mouseout') onOut() {
    this.mostrar = false;
  }

  constructor(elem: ElementRef) { 
    // elem.nativeElement.value = "Hola";
    elem.nativeElement.style.textDecoration = 'underline'
  }

}
