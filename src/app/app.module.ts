import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycompComponent } from './mycomp/mycomp.component';
import { HeroChildComponent } from './comp/hero-child/hero-child.component';
import { HeroParentComponent } from './comp/hero-parent/hero-parent.component';
import { NameChildComponent } from './comp/name-child/name-child.component';
import { NameParentComponent } from './comp/name-parent/name-parent.component';
import { VoterComponent } from './comp/voter/voter.component';
import { VoterTakerComponent } from './comp/voter-taker/voter-taker.component';
import { CountdownTimerComponent } from './comp/countdown-timer/countdown-timer.component';
import { CountdownLocalVarParentComponent } from './comp/countdown-local-var-parent/countdown-local-var-parent.component';
import { CountdownViewChildParentComponent } from './comp/countdown-view-child-parent/countdown-view-child-parent.component';
import { MissionControlComponent } from './comp/mission-control/mission-control.component';
import { AstronautComponent } from './comp/astronaut/astronaut.component';


@NgModule({
  declarations: [
    AppComponent,
    MycompComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
    VoterComponent,
    VoterTakerComponent,
    CountdownTimerComponent,
    CountdownLocalVarParentComponent,
    CountdownViewChildParentComponent,
    MissionControlComponent,
    AstronautComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
