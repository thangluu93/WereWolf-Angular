import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InstructionComponent } from '../instruction/instruction.component';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public dialog: MatDialog,public userService:UsersService) {
    window.onscroll = function() {
    myFunction();
  };

  let isLogin=false;

  function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("container").className = "navbarChange mat-toolbar mat-toolbar-multiple-rows ";
        document.getElementById("iconhomepage").className = "iconChange ";
        document.getElementById("title").className = "titleChange ";
    } else {
        document.getElementById("container").className = "nav-bar mat-toolbar mat-toolbar-multiple-rows";
        document.getElementById("iconhomepage").className = "iconhomepage ";
        document.getElementById("title").className = "title "; 
    }
  } 
}

  openDialog(): void {
    const dialogRef = this.dialog.open(InstructionComponent, {
      width:'1000px',
      height:'500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit():void {
  }
}