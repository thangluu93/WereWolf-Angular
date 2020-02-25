
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocketioService } from './services/socketIo/socket-io.service';

import { MyUiModule } from './my-ui/my-ui.module';

// Firebase lib
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule} from '@angular/fire/auth'
import { AngularFireStorageModule} from '@angular/fire/storage'
import { environment } from 'src/environments/environment';
;



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MyUiModule,

    // Firebaselib
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,  //firestore
    AngularFireAuthModule,   //auth
    AngularFireStorageModule,//Storage


  ],
  providers: [SocketioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
