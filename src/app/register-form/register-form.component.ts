import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  firstname:String='';
  lastname:String='';
  username:String='';
  password:string='';

  constructor() { }

  ngOnInit(): void {
  }
  signup(){
    console.log(this.firstname + " " + this.lastname + " " + this.username + " " + this.password);
  }

}
