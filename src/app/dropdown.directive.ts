// import { Directive, ElementRef,  HostBinding, HostListener } from '@angular/core';

// @Directive({
//   selector: '[appDropdown]'
// })
// export class DropdownDirective {
//   @HostBinding('className') ddClass: string;

//   constructor(private elRef: ElementRef) { }

//   @HostListener('click') onClick(){
//     const currentClass: string = this.elRef.nativeElement.className;
//     currentClass.includes('open')
//       ? this.ddClass = currentClass.replace('open', '').trim()
//       : this.ddClass = currentClass.concat(' open');
//   }

// }
