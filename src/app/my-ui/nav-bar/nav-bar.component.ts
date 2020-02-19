import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InstructionComponent } from '../instruction/instruction.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar, public afAuth: AngularFireAuth) {
    window.onscroll = function() {
    myFunction();
  };

  function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("container").className = "navbarChange mat-toolbar mat-toolbar-multiple-rows ";
        document.getElementById("icon").className = "iconChange ";
        document.getElementById("title").className = "titleChange ";
    } else {
        document.getElementById("container").className = "nav-bar mat-toolbar mat-toolbar-multiple-rows";
        document.getElementById("icon").className = "icon ";
        document.getElementById("title").className = "title "; 
    }
  } 
}
avt = '';

  openDialog(): void {
    const dialogRef = this.dialog.open(InstructionComponent, {
      width:'1000px',
      height:'500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.afAuth.user.subscribe((usr) => {
      if (!usr.emailVerified) {
        usr.sendEmailVerification().then(() => {
          this.afAuth.auth.signOut();
          this.snackBar.open('Please check your email to verify your account', 'OK', {duration: 5000});
        }).catch((err) => {
          this.snackBar.open(err, 'OK', {duration: 5000});
        });

      }
      this.avt = usr.photoURL;

    });
  }
}
