import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RocketComponent } from './rocket/rocket.component';
import { MoveDirective } from './move.directive';
import { FireDirective } from './fire.directive';
import { LaserComponent } from './laser/laser.component';
import { AlienComponent } from './alien/alien.component';
import { AlienDirective } from './alien.directive';
import { StartComponent } from './start/start.component';
import { StopComponent } from './stop/stop.component';
import { TimerDirective } from './timer.directive';
import { CrashDirective } from './crash.directive';

@NgModule({
  declarations: [
    AppComponent,
    RocketComponent,
    MoveDirective,
    FireDirective,
    LaserComponent,
    AlienComponent,
    AlienDirective,
    StartComponent,
    StopComponent,
    TimerDirective,
    CrashDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
