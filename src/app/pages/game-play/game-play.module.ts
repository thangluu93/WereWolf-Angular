import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { GamePlayRoutingModule } from './game-play-routing.module';
import { GamePlayComponent } from './game-play.component';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

// import { Router } from '@angular/router';
@NgModule({
  declarations: [GamePlayComponent],
  imports: [
    CommonModule,
    GamePlayRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
    // Router,
  ],
})
export class GamePlayModule { }
