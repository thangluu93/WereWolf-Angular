import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamePlayRoutingModule } from './game-play-routing.module';
import { GamePlayComponent } from './game-play.component';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [GamePlayComponent],
  imports: [
    CommonModule,
    GamePlayRoutingModule,
    MatSidenavModule,
  ]
})
export class GamePlayModule { }
