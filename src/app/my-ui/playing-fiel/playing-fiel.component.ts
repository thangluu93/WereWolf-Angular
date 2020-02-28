import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../../models/model.user';
import * as CharRole from '../../models/model.role';
import { from } from 'rxjs';
@Component({
  selector: 'app-playing-fiel',
  templateUrl: './playing-fiel.component.html',
  styleUrls: ['./playing-fiel.component.scss']
})
export class PlayingFielComponent implements OnInit {
  


  constructor(public Router:Router,
    
    ) { 

    }
  user:User=new User();
  
  ngOnInit(): void {
    this.InitUser();
  };
  public InitUser(){
    if (this.user.role=CharRole.witch){
    // this.user.email='Player 1';
    // this.user.uid='XXXX';
    // console.log(this.user.email);
    // console.log(this.user.uid);
    console.log(this.user.role['canKill']);
    console.log(this.user.role['canChat']);
    console.log(this.user.role['canVote']);
    console.log(this.user.role['canSave']);
    }
  }

  // public  InitUser(){
  //   this.user
  }




