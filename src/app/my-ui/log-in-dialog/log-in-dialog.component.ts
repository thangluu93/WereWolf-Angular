import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-log-in-dialog',
  templateUrl: './log-in-dialog.component.html',
  styleUrls: ['./log-in-dialog.component.scss']
})
export class LogInDialogComponent implements OnInit {

  isSignUp = true;

  constructor(public diaRef: MatDialogRef<LogInDialogComponent>,public afAuth: AngularFireAuth, public snackBar: MatSnackBar) { }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  retypePassword = new FormControl('', [Validators.required, Validators.pattern(this.password.value)]);

  ngOnInit(): void {
  }

  changeTab(i) {
    this.isSignUp = (i === 0);
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

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email.value, this.password.value).then(() => {
      this.snackBar.open('Got ya!', 'OK', {duration: 2000});
      this.diaRef.close();
    }).catch((err) => {
      this.snackBar.open(err, 'OK', {duration: 2000});
    });
  }

  signUp() {
    if (this.password.value !== this.retypePassword.value) {
      this.snackBar.open('Retyped password does not match!!', 'OK', {duration: 2000});
      return;
    }
    this.afAuth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value).then(() => {
      this.snackBar.open('Got ya!', 'OK', {duration: 2000});
      this.email.reset();
      this.password.reset();
      this.retypePassword.reset();
    }).catch((err) => {
      this.snackBar.open(err, 'OK', {duration: 2000});
    });
  }

  // loginWithGG() {
  //   const provider = new auth.GoogleAuthProvider();
  //   this.afAuth.auth.signInWithPopup(provider).then(() => {
  //     this.snackBar.open('Got ya!', 'OK', {duration: 2000});
  //     this.diaRef.close();
  //   }).catch((err) => {
  //     this.snackBar.open(err, 'OK', {duration: 2000});
  //   });
  // }
}

