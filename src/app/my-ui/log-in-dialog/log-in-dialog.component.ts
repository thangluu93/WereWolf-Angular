import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormControlName,FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';

import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-log-in-dialog',
  templateUrl: './log-in-dialog.component.html',
  styleUrls: ['./log-in-dialog.component.scss']
})
export class LogInDialogComponent implements OnInit {

  constructor(public Router:Router) { }

  isLogin=true;

  ngOnInit(): void {
  }



  email=new FormControl('',[Validators.required,Validators.email]);
  password=new FormControl('',[Validators.required,Validators.minLength(8)]);
  retypePassword=new FormControl('',[Validators.required,Validators.pattern(this.email.value)]);

  changTab(i){
    this.isLogin=i==0;
  }

  getPasswordError(){
    return this.password.hasError('required')?"You must enter your password":
      this.password.hasError('minLength')?"Your password must have at least 8 character":'';
  }

  getEmailError(){
    return this.email.hasError('required')?"You must enter your email":
      this.email.hasError('email')?"You must enter your email correctly":"";
  }

  getRetypePasswordError(){

    return this.retypePassword.hasError('required')?"You must retype your password":
      this.retypePassword.hasError('pattern')?'You must retype your password correctly':'';

  }

}
