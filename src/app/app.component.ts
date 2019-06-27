import { Component,
  Renderer2,
  Inject,
  Injectable,
  Injector,
  EmbeddedViewRef,
  ApplicationRef,
  Output
} from '@angular/core';
import { HostListener } from '@angular/core';

declare function onRightjs(): any;
var play = false;
import '../assets/js/spacebattle.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spacebattle';
  key;

  // @HostListener('document: keydown', ['$event'])
  // handleKeyBoardEvent(event: KeyboardEvent) {
  //   if (event.key == 'Enter') {
  //     play = true;
  //   }
  //   else if (event.key == 'Escape') {
  //     play = false;
  //     alert(play);
  //   }

  //   alert('hello');
  //   var count = 0;
  //   while(play) {
  //     const child = document.createElement('button');
  //     child.innerHTML = count + '';
  //     this.renderer.appendChild(document.body, child);
  //     count++;
  //   }
  // }

}
