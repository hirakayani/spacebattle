import { Directive,
  HostListener,
  ElementRef,
  Renderer2,
  Inject,
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef,
  Output
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { EventEmitter } from 'events';

var play = false;

@Injectable()
@Directive({
  selector: '[appAlien]'
})
export class AlienDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  // @HostListener('document: keydown', ['$event'])
  // handleKeyBoardEvent(event: KeyboardEvent) {
  //   if (event.key == 'Enter') {
  //     play = true;
  //   }

  //   else if (event.key == 'Escape') {
  //     play = false;
  //   }

    // while (play) {
    //   setTimeout(function() {
    //     const child = document.createElement('img');
    //     child.src = '../assets/alien.jpg';
    //     child.style.width = '70px';
    //     child.style.position = 'absolute';
    //     child.style.top = '0px';
    //     child.className = 'alien';
    //     this.renderer.appendChild(document.body, child);
    //   }, 5000);
  
    //   var list = document.getElementsByClassName('alien') as HTMLCollectionOf<HTMLElement>;
    //   var item = list[list.length - 1];
    //   var move = 0;
    //   var id = setInterval(function() {
    //     if (parseInt(item.style.bottom) == 0) {
    //       item.parentNode.removeChild(item);
    //       clearInterval(id);
    //     }
    //     else {
    //       item.style.top = move + 'px';
    //       move = move + 1;
    //     }
    //   }, 10);
  
    // }

  // }
    
  
}
