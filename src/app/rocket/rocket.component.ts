import { Component, OnInit } from '@angular/core';

// declare function onRightjs(): any;

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})

export class RocketComponent implements OnInit {
  speed = 1;

  constructor() { }

  ngOnInit() {
    // onRightjs();
  }

}
