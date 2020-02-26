import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { AngularFireAuth} from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore';
import {auth} from 'firebase';
// import { Observable } from 'rxjs'
// import { AngularFireDatabase } from '@angular/fire/database'

@Component({
  selector: 'app-log-in-dialog',
  templateUrl: './log-in-dialog.component.html',
  styleUrls: ['./log-in-dialog.component.scss']
})
export class LogInDialogComponent implements OnInit {

  constructor(public snackBar: MatSnackBar, public Router: Router,
    public db:AngularFirestore,
    public afAuth:AngularFireAuth,
    public user:UsersService,
    ) { 
    }

  isSignUp = true;
  isLogIn = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  retypePassword = new FormControl('', [Validators.required, Validators.pattern(this.password.value)]);

  ngOnInit(): void {
  }


  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getPasswordError() {
    return this.password.hasError('required') ? 'You must enter a password' :
    this.password.hasError('minLength') ? 'You password must have 8 characters' :
          '';
  }

  getRetypePasswordError() {
    return this.retypePassword.hasError('required') ? 'You must enter a password' :
        this.retypePassword.hasError('pattern') ? 'You must retype exactly' :
          '';
  }

  signUp() {
    if (this.email.value == 0) {
      this.snackBar.open('Please Input Infomation','OK', {duration: 2000});
    }
    if (this.password.value !== this.retypePassword.value) {
      this.snackBar.open('Retyped password does not match!!', 'OK', {duration: 2000});
      return;
    }
  }
  LogIn(){
    this.afAuth.auth.signInWithEmailAndPassword(this.email.value,this.password.value).then(() => {
      this.snackBar.open('Success' , 'OK', {duration : 2000});
    }).catch((err) => {
      this.snackBar.open(err, 'OK',{duration: 2000});
    });
  }


  async loginwithGG(){
    await this.user.logingg().then(() =>{
      this.Router.navigate(['game-play'])
    })
  }
}

