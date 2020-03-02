import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {  AngularFireAuth} from '@angular/fire/auth'
import { auth} from 'firebase';
import {SocketioService} from './socketIo/socket-io.service'
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  public user:User = {
    email:'',
    name:'',
    photoURL:'',
  }

  
  uid: string = "";
  constructor(
    public db:AngularFirestore,
    public afAuth:AngularFireAuth,
    public socketIo:SocketioService

  ) { }

  async logingg(){
    const provider = await new auth.GoogleAuthProvider();
    await this.afAuth.auth.signInWithPopup(provider).then((u)=>{
      console.log(u.user);
      this.uid = u.user.uid;
      this.user.email = u.user.email;
      this.user.name = u.user.displayName;
      this.user.photoURL = u.user.photoURL;
      if(!this.checkuser(u.user.uid)){
        this.adduser();
      }
    });
  }

  checkuser(uid:string):boolean{
    this.db.collection('users').doc(uid).get().subscribe((data)=>{
      if(data.exists){
        return true;
      }
      else return false;
    });
    return false;
  }

  adduser(){
    this.db.collection('users').doc(this.uid).set(this.user);
  }

  sendUserData(){
    this.socketIo.sendData(this.uid);
  }
}

interface User{
  email:string,
  name:string,
  photoURL:string,
}