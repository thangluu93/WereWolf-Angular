import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
//firebase
// import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';
// import { UserDataService } from 'src/app/services/user-data.service';
// import { resolve } from 'url';
// import { MatDialogRef  } from '@angular/material/dialog';
>>>>>>> afe021dd87fac21abe0c37f237cabd16bff61074

@Component({
  selector: 'app-log-in-dialog',
  templateUrl: './log-in-dialog.component.html',
  styleUrls: ['./log-in-dialog.component.scss']
})
export class LogInDialogComponent implements OnInit {

<<<<<<< HEAD
  constructor(public snackBar: MatSnackBar, public Router: Router) { }
=======
  constructor(public snackBar: MatSnackBar,
              // public userDataService: UserDataService,
              // private afAuth: AngularFireAuth,
              // private dialogRef: MatDialogRef<LogInDialogComponent>
    ) { }
>>>>>>> afe021dd87fac21abe0c37f237cabd16bff61074

  isSignUp = true;

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
    if (this.password.value !== this.retypePassword.value) {
      this.snackBar.open('Retyped password does not match!!', 'OK', {duration: 2000});
      return;
    }
  }



  // Login With Google
  // async loginWithGoogle() {
  //   const provider = new auth.GoogleAuthProvider();
  //   const credetial = await this.afAuth.auth.signInWithPopup(provider);
  //   return this.userDataService.updateUserData(credetial.user)
  //   .then(() =>
  //     setTimeout(this.dialogRef.close, 1000)
  //   )
  //   .catch(err => console.log(err));
  // }

  // signOut() {
  //   this.userDataService.logOut();
  //   setTimeout(this.dialogRef.close, 1000);
  // }
}

