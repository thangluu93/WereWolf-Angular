import { Component, OnInit } from "@angular/core";
import { SocketioService } from "src/app/socketio.service";

@Component({
  selector: "app-chat-box",
  templateUrl: "./chat-box.component.html",
  styleUrls: ["./chat-box.component.scss"]
})
export class ChatBoxComponent implements OnInit {
  newMessage: "";
  name: string;
  messageLists =[]
  messageListsRocover=[]
  _RecoverMessagesFlag=false
  constructor(private SocketioService: SocketioService) {}

  sendMessage() {
    if (this.newMessage!=undefined) {
      console.log(this.newMessage+"does it run");
      this.SocketioService.sendData({
        name: this.name,
        message: this.newMessage
      });

    }  this.newMessage = undefined;
  }
  ngOnInit() {
    this.SocketioService.setUpReover();
    this.SocketioService.getData().subscribe(data => {
      if (this.messageListsRocover.length!=0) {
        this.SocketioService.recoverMess.unsubscribe()
      }
      this.messageLists.push(data);
      console.log(this.messageLists);
    })
    this.SocketioService.getDataFormRecoverofRoom().subscribe(data => {
      if (this._RecoverMessagesFlag) {
        this.SocketioService.recoverMess.unsubscribe()
      }
      console.log("------")
      console.log(data)
      console.log("------")
      this.messageListsRocover=data
      this._RecoverMessagesFlag=true
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.SocketioService.getData().unsubscribe()

  }
}

// export class Message {
//   name: string;
//   msg: string;
// }
