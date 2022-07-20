import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-form',
  templateUrl: './provider-form.component.html',
  styleUrls: ['./provider-form.component.css']
})
export class ProviderFormComponent implements OnInit {
  username:String='';
  password:string='';
  provider:string='';
  constructor() { }

  ngOnInit(): void {
  }
  service(){
    console.log(this.username + " " + this.password + " " + this.provider)
  }

}
