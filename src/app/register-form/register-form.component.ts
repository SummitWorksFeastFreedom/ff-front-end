import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  firstName: string='';
  lastName: string='';
  username: string='';
  password: string='';

  constructor() { }

  ngOnInit(): void { }
  
  signup(){
    console.log(this.firstName + " " + this.lastName + " " + this.username + " " + this.password);
  }

}
