import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayingRoutingModule } from './playing-routing.module';
import { PlayingComponent } from './playing.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';




@NgModule({
  declarations: [PlayingComponent],
  imports: [
    CommonModule,
    PlayingRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule
    
  ]
})
export class PlayingModule { }
