import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playing-fiel',
  templateUrl: './playing-fiel.component.html',
  styleUrls: ['./playing-fiel.component.scss']
})
export class PlayingFielComponent implements OnInit {

  constructor(public Router:Router) { }

  ngOnInit(): void {
  }
  
}

