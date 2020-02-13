import { MyUiModule } from './my-ui/my-ui.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase lib
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule} from '@angular/fire/auth'
import { AngularFireStorageModule} from '@angular/fire/storage'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,

    // Firebaselib
    AngularFireModule,
    AngularFirestoreModule,  //firestore
    AngularFireAuthModule,   //auth
    AngularFireStorageModule,//Storage    
    MyUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
