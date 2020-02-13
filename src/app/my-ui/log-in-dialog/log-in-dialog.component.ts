import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in-dialog',
  templateUrl: './log-in-dialog.component.html',
  styleUrls: ['./log-in-dialog.component.scss']
})
export class LogInDialogComponent implements OnInit {

  constructor() { }

  isLogin=true;

  ngOnInit(): void {
  }

  email=new FormControl('',[Validators.required,Validators.email]);
  password=new FormControl('',[Validators.required,Validators.minLength(8)]);

  changTab(i){
    this.isLogin=i==0;
  }

  getPasswordError(){
    return this.password.hasError('required')?"You must enter password":
      this.password.hasError('minLength')?"Your password must have at least 8 character":'';
  }

  

}
