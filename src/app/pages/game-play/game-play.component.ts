import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketioService } from 'src/app/services/socketIo/socket-io.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Events from '../../events';
import { AngularFireAuth } from '@angular/fire/auth';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.scss'],
  
})
export class GamePlayComponent implements OnInit {

  constructor(public Router:Router,public afAuth:AngularFireAuth,public socket:SocketioService,public game:GameService,public http:HttpClient) { }

  ngOnInit(): void {
    this.game.onSendRoomStatus = function(data){
      console.log(data);
    };
  }
  async onCreateLobby() {
    this.socket.sendData("global",{
      event:"lobby.create"
    });
    let id = await this.socket.getData("lobby.id").toPromise();
    console.log(id);
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
