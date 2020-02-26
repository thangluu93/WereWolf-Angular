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
    this.user.email='asdasdsadasdsad';
    this.user.role=CharRole.witch

    console.log(this.user.email)
    console.log(this.user.role['canKill']);
  }



}

