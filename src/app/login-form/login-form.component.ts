import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username:String='';
  password:string='';
  role:string='';

  roles:string[];
  constructor() {
    this.roles=[
      'admin',
      'user'
    ]
   }

  ngOnInit(): void {
  }

  login(){
    console.log(this.username + " " + this.password + " " + this.role)
  }

}
