import { Component, OnInit, Renderer2 } from '@angular/core';
import * as uuid from 'uuid';

var id = '';
var lives = 3;


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  public start() {
    this.aliens();


  }

    
    // var interval = setInterval(function() {
    //   alert('does this work?');
    //   const child = document.createElement('img');
    //   child.src = '../assets/alien.png';
    //   child.style.width = '70px';
    //   child.style.position = 'absolute';
    //   child.style.top = '0px';
    //   child.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
    //   child.className = 'alien';
    //   this.renderer.appendChild(document.body, child);
    //   move = move + 1;
    //   // this.anotherFunction();
    //   if (move == 5) {
    //     clearInterval(interval);
    //   }

    // }, 10);
  // }

  // public move() {
  //   alert('did this work?');
  //   var target = document.getElementById('body');

  //   var callback = function(mutationsList, observer) {
  //     console.log(mutationsList);
  //   };

  //   var observer = new MutationObserver(callback);

  //   alert('did this work?');

  //   observer.observe(target);

  //   // observer.disconnect();
  // }

  // public afunction() {
  //   var number = 4;
  //   var id = setInterval(function() {
  //     alert('does this work?');
  //     number = number + 1;
  //     if (number == 6) {
  //       clearInterval(id);
  //     }
  //   }, 10);
  // }

  public sleep(miliseconds) {
    var currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {

    }
  }

  public aliens() {
    var move = 0;
    var start = true;

    do {
      id = uuid.v4();
    
      const child = document.createElement('img');
      child.src = '../assets/alien.png';
      child.style.width = '70px';
      child.style.position = 'absolute';
      child.style.top = '0px';
      child.className = 'alien';
      child.id = id;
      child.style.left = Math.floor(Math.random() * (window.innerWidth - 70)) + 'px';
      this.renderer.appendChild(document.body, child);
      move = move + 1;
      this.anotherFunction();

      if (move == 1) {
        start = false;
      }

    } while (start)


  }
  

  public anotherFunction() {
    var item = document.getElementById(id);
    // var item = list[0];
    var move = 0;    
    var shift = Math.random();
    var interval = setInterval(function() {
    var lasers = document.getElementsByClassName('laser') as HTMLCollectionOf<HTMLElement>;
    var aliens = document.getElementsByClassName('alien') as HTMLCollectionOf<HTMLElement>;
    var rocket = document.getElementById('rocket');

    if (item.parentNode) {
      if (parseInt(item.style.top) >= window.innerHeight - 60) {
        item.parentNode.removeChild(item);
        clearInterval(interval);
      }
      else {
        item.style.top = move + 'px';
        move = move + shift;
        if ((item.offsetTop + item.offsetHeight) >= rocket.offsetTop && item.offsetTop <= window.innerHeight && rocket.offsetLeft <= item.offsetLeft && rocket.offsetLeft + rocket.offsetWidth >= (item.offsetLeft)) {
          item.parentNode.removeChild(item);
          lives = lives - 1;
          document.getElementById('lives').innerHTML = 'Lives: ' + lives;
        }
      }
    }
      
      // if (lasers.length > 0 && item.parentNode)
      // {
      //   for (var i = 0; i < lasers.length; i++)
      //   {
      //     if (parseInt(lasers[i].style.bottom) == parseInt(item.style.top)) {
      //       console.log(lasers[i].offsetLeft);
      //       console.log(item.offsetLeft);
      //       if (lasers[i].offsetLeft >= item.offsetLeft && lasers[i].offsetLeft <= (item.offsetLeft + 70)) {
      //         item.parentNode.removeChild(item);
      //         // lasers[i].parentNode.removeChild(lasers[i]);
      //       }
      //     }
      //   }
      // }
      // start();
      
    }, 10);

  }

}
