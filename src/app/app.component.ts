import { Component, OnInit } from '@angular/core';
import { SocketioService } from './services/socketIo/socket-io.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'WereWolf-Angular';
  constructor(private socketService: SocketioService) {}
  ngOnInit() {
    this.socketService.setupSocketConnection();
  }
}
