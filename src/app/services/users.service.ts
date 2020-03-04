import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase';
import { SocketioService } from './socketIo/socket-io.service'
import * as firebase from 'firebase/app'
import { ResolveEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public user: User = {
    email: '',
    name: '',
    photoURL: '',
  }


  uid: string = "";
  constructor(
    public db: AngularFirestore,
    public afAuth: AngularFireAuth,
    public socketIo: SocketioService

  ) { 
    this.afAuth.authState.subscribe(user => {
      this.user.email = user.email;
      this.user.name=user.displayName;
      this.user.photoURL=user.photoURL;
    })
  }

  async loginWithGoogle() {
    return new Promise<any>((resolve, reject) => {
      let provider = new auth.GoogleAuthProvider();
      this.afAuth.auth.signInWithPopup(provider).then((u) => {
        this.uid = u.user.uid;
        this.user.email = u.user.email;
        this.user.name = u.user.displayName;
        this.user.photoURL = u.user.photoURL;
        if (!this.checkUser(u.user.uid)) {
          this.addUser();
        }
      })
    })
  }

    


  checkUser(uid: string): boolean {
    this.db.collection('users').doc(uid).get().subscribe((data) => {
      if (data.exists) {
        return true;
      }
      else return false;
    });
    return false;
  }

  addUser() {
    this.db.collection('users').doc(this.uid).set(this.user);
  }

  sendUserData() {
    this.socketIo.sendData("users", this.uid);
  }


}

interface User {
  email: string,
  name: string,
  photoURL: string,
}