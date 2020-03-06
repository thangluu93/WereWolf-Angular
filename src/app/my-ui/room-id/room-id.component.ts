import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { SocketioService } from 'src/app/services/socketIo/socket-io.service';
import { HttpClient } from '@angular/common/http';
import { GameService } from 'src/app/services/game.service';
import Events from '../../events';

@Component({
  selector: 'app-room-id',
  templateUrl: './room-id.component.html',
  styleUrls: ['./room-id.component.scss']
})
export class RoomIdComponent implements OnInit {

  constructor(public Router:Router,public afAuth:AngularFireAuth,public socket:SocketioService,
    public game:GameService) { }

  ngOnInit(): void {
  }

  onJoin(){
    this.socket.sendData("global",{
      event:Events.repliedJoinLobby,
      roomId:this.lobbyId,
      userId:this.afAuth.auth.currentUser.uid,
    });
  }
  lobbyId ="";
}
