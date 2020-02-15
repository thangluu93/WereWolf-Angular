import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InstructionComponent } from '../instruction/instruction.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public dialog: MatDialog) {
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
openDialog(): void {
  const dialogRef = this.dialog.open(InstructionComponent, {
    width:'1000px',
    height:'500px',
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

  ngOnInit(): void {
  }

}
