import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent implements OnInit {

    email = ''
    password = ''
    invalidLogin = false

    constructor(private router: Router,
        private loginservice: AuthenticationService) { }
    
    ngOnInit() { }


    checkLogin() {
        if (this.loginservice.authenticate(this.email, this.password)) {
            this.router.navigate(['customer-page'])
            this.invalidLogin = false
        } else
            this.invalidLogin = true
    }
}
