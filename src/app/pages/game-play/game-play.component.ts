import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.scss'],
  
})
export class GamePlayComponent implements OnInit {

  constructor(public Router:Router) { }

  ngOnInit(): void {
  }
  // onCreateLobby() {

  // }
  // onJoin(){

  // }
  // lobbyId ="";
}
