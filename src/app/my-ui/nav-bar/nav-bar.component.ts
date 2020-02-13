import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() {
    window.onscroll = function() {
    myFunction();

};

function myFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        document.getElementById("container").className = "navbarChange mat-toolbar mat-toolbar-multiple-rows ";
        document.getElementById("icon").className = "iconChange ";
        document.getElementById("title").className = "titleChange ";
    } else {
        document.getElementById("container").className = "nav-bar mat-toolbar mat-toolbar-multiple-rows";
        document.getElementById("icon").className = "icon ";
        document.getElementById("title").className = "title "; //fiox
    }
} 

}

  ngOnInit(): void {
  }

}
