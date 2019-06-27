import { Directive, ElementRef, HostListener } from '@angular/core';

var position;
var move;

@Directive({
  selector: '[appMove]'
})
export class MoveDirective {

  constructor(private el: ElementRef) { }

  @HostListener('document: keydown', ['$event']) 
  handleKeyBoardEvent(event: KeyboardEvent) {
    position = this.el.nativeElement.style.left.replace('px', '');
    if (position == '')
    {
      position = 0;
    }
    else {
      position = parseInt(position);
    }

    if(event.key == 'ArrowRight') {
      move = position + 30;
      if (position >= window.innerWidth) {
        return;
      }
      else {
        this.el.nativeElement.style.left = move.toString() + 'px';
      }
    }
    else if (event.key == 'ArrowLeft') {
      move = position - 30;
      if (position <= 0 ) {
        return;
      }
      else {
        this.el.nativeElement.style.left = move.toString() + 'px';
      }
    }
  }
}
