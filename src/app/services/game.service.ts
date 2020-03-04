import { Injectable } from '@angular/core';
import { SocketioService } from './socketIo/socket-io.service';
import Events from '../events';

@Injectable({
  providedIn: 'root'
})
export class GameService{

  constructor(public socket:SocketioService) {
    socket.getData("global").subscribe(data=>{
      let event = data.event;
      if(event == Events.sendToWolf){
        this?.onSendToWolf(data);
      }
      else if(event == Events.sendJoiningStatus){
        this?.onJoiningRoom(data);
      }
      else if(event == Events.sendRoomStatus){
        this?.onSendRoomStatus(data);
      }
      else if(event==Events.dayStatus){

      }
    });
  }
  public onJoiningRoom:(data)=>void;
  public onSendRoomStatus:(data)=>void;
  public onSendToWolf:(data)=>void;

}
