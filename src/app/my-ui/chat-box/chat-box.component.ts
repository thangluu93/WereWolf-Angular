import { Component, OnInit } from "@angular/core";
import { SocketioService } from "./../../services/socketIo/socket-io.service";
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-chat-box",
  templateUrl: "./chat-box.component.html",
  styleUrls: ["./chat-box.component.scss"]
})

export class ChatBoxComponent implements OnInit {
  newMessage: "";
  name: string;
  messageLists = []
  messageListsRocover = []
  _RecoverMessagesFlag = false;
  _RecoverMessagesSubcription

  constructor(private SocketioService: SocketioService, private UsersService:UsersService,public Router:Router) {
   }

  sendMessage() {
    if (this.newMessage != undefined) {

      this.SocketioService.sendData("global-chat",{
        name: this.UsersService.user.name,
        message: this.newMessage
      });
    } this.newMessage = undefined;
    console.log(this.UsersService.user.name+'name');
    
  }

  ngOnInit() {
    this.SocketioService.setUpRecover("global-chat");

    this.SocketioService.getData("global-chat").subscribe(data => {
      // if (this.messageListsRocover.length != 0) {
      //   this.SocketioService.recoverMess.unsubscribe()
      // }
      this.messageLists.push(data);
      console.log(this.messageLists);
    });

    this._RecoverMessagesSubcription=this.SocketioService.getDataFormRecoverofRoom().then(data => {
      if (this._RecoverMessagesFlag && (this._RecoverMessagesFlag=true)) {
        this._RecoverMessagesSubcription.unsubscribe();
      }
      console.log("------")
      console.log(data)
      console.log("------")
      this.messageListsRocover = data
       this._RecoverMessagesFlag = true
    });
  }

  ngOnDestroy(): void {
    // this._RecoverMessagesSubcription.unsubscribe();

  }
}

