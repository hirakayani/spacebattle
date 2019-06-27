import { Directive } from '@angular/core';

@Directive({
  selector: '[appTimer]'
})
export class TimerDirective {

  constructor() { }

}

var start = false;


game();

var id = setInterval(function() {
  if (start) {
    play();
    clearInterval(id);
  }
}, 500);

function play() {
  var timer = setInterval(function() {
    for (var i = 0; i < Math.floor(Math.random() * 6); ++i) {
      document.getElementById('begin').click();
    }
  }, 2000);
}


function game() {
  setTimeout(function() {
    document.getElementById('begin').addEventListener("click", function() {
      start = true;
    }, false);
  }, 5000);
}

function sleep(miliseconds) {
  var currentTime = new Date().getTime();

  while (currentTime + miliseconds >= new Date().getTime()) {

  }
}

