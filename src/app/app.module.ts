import { SocketioService } from './socketio.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyUiModule } from './my-ui/my-ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyUiModule,
  ],
  providers: [SocketioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
