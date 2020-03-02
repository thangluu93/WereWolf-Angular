import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { GamePlayRoutingModule } from './game-play-routing.module';
import { GamePlayComponent } from './game-play.component';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { Router } from '@angular/router';
@NgModule({
  declarations: [GamePlayComponent],
  imports: [
    CommonModule,
    GamePlayRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
    // Router,
  ],
})
export class GamePlayModule { }
