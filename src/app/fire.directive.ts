import { Directive, 
  HostListener, 
  ElementRef, 
  Renderer2, 
  Inject,
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef 
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

var score = 0;
var total = 0;
var level = 1;
var lives = 3;

@Injectable()
@Directive({
  selector: '[appFire]'
})
export class FireDirective {

  constructor(private el: ElementRef, 
    private renderer: Renderer2, 
    @Inject(DOCUMENT) private document,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  @HostListener('document: keydown', ['$event'])
  handleKeyBoardEvent(event: KeyboardEvent) {
    if (event.keyCode == 32) {
      // const parent = document.createElement('div');
      // parent.className = 'laser';
      // parent.style.position = 'relative';
      // parent.style.height = '250px';
      const child = document.createElement('img');
      child.src = 'assets/fire.png'
      child.style.position = 'absolute';
      child.style.width = '26px';
      child.className = 'laser';
      // alert('hello');
      child.style.left = (this.el.nativeElement.offsetLeft + (this.el.nativeElement.offsetWidth / 2)) - (26 / 2) + 'px';
      // child.style.left = this.el.nativeElement.style.left + this.el.nativeElement.style.width;
      //  alert(this.el.nativeElement.offsetWidth);
      // child.style.left = ((this.el.nativeElement.offsetLeft + (this.el.nativeElement.offsetWidth / 2)) - (child.offsetWidth / 2)) + 'px';
      //  alert(this.el.nativeElement.offsetLeft + this.el.nativeElement.offsetWidth / 2);
      child.style.bottom = this.el.nativeElement.offsetHeight - 5 + 'px';
      // this.renderer.appendChild(parent, child);
      this.renderer.appendChild(document.body, child);
      // var position = 0;
      // while (position < 20) {
      //   position = parseInt(child.style.bottom);
      //   child.style.bottom = child.offsetHeight + position + 'px';
      // }
      // alert('did this work?');
      let list = document.getElementsByClassName('laser') as HTMLCollectionOf<HTMLElement>;
      var aliens = document.getElementsByClassName('alien') as HTMLCollectionOf<HTMLElement>;
      var rocket = document.getElementById('rocket');
      var move = 0;
      var position = 0;
      var item = list[list.length - 1];
      var id = setInterval(function() {
        if (parseInt(item.style.bottom) >= window.innerHeight) {
          item.parentNode.removeChild(item);
          clearInterval(id);
        }
        else {
          item.style.bottom = 99 + move + 'px';
          move = move + 5;
          for (var i = 0; i < aliens.length; i++) {
            if (item.offsetTop <= aliens[i].offsetTop - aliens[i].offsetHeight && item.offsetTop >= aliens[i].offsetTop + aliens[i].offsetHeight) {
              console.log('offset top');
            }
            if (item.offsetTop >= aliens[i].offsetTop - 5 && item.offsetTop <= aliens[i].offsetTop + 5 && item.offsetLeft >= aliens[i].offsetLeft && item.offsetLeft <= (aliens[i].offsetLeft + 70)) {
              aliens[i].parentNode.removeChild(aliens[i]);
              total = total + 1;
              score = score + 1;
              document.getElementById('score').innerHTML = 'Score: ' + score;
              // if (score == 1) {
              //   document.getElementById('begin').click();
              // score = 0;
              // }
            }
            // if (item.offsetLeft >= aliens[i].offsetLeft && (window.innerWidth - item.offsetLeft - parseInt(item.style.width)) <= (window.innerWidth - aliens[i].offsetLeft - parseInt(aliens[i].style.width))) {
            //   console.log('crash');
            // }
          }
        }
      }, 10);
      // while (move < 20) {
      //   position = parseInt(child.style.bottom);
      //   child.style.bottom = position + move + 'px';
      //   move++;
      // }
    }
  }

}
