import { environment } from "../../../environments/environment";
// import { Injectable, Query } from '@angular/core';
import * as io from "socket.io-client";
// import { Message } from '../app/my-ui/chat-box/chat-box.component';
import { Observable, Subject } from "rxjs";

export class SocketioService {
  socket;
  Observable;
  msg;
  name;
  public recoverMess = new Subject<any>();


  // data;

  constructor() {}
  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT, function (socket) {

    });
  }

  public sendData(roomId, data) {
    this.socket.emit(roomId, data);
  }


  public getData(roomId):Observable<any>{
    return Observable.create(observer => {
      this.socket.on(roomId, data => {
        console.log(data);
        observer.next(data);
      });
    });
  };

  public setUpRecover(roomId) {
    this.socket.on('reconnect', (socket) => {
      {
          socket.on(roomId, data => {
          this.recoverMess.next(data)
        });
      }
    })
  }

  public async getDataFormRecoverofRoom(): Promise<any> {
    return await this.recoverMess.asObservable();
  };
};


// this.data = JSON.stringify({ name: this.name, message: this.msg })

// setupSocketConnection() {
//   this.socket = io(environment.SOCKET_ENDPOINT, {
//     query: {
//       token: 'cde'
//     }
//   });

//   this.socket.emit('my message', 'Hello there from Angular.');

// io=io(environment.SOCKET_ENDPOINT, function(socket){
//   socket.emit('send',{
//     msg: this.message.msg.value,
//     name: this.message.name.value,
//   })
// })

// this.io.socket.on('my broadcast', (data) => {
//   console.log(data.name+'/n'+ data.msg);

// })
