import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent implements OnInit {

    newCustomer: any = {
        email: '',
        password: ''
    }

    invalidLogin = false

    loginForm = this.formBuilder.group({
        email: '',
        password: ''
    })

    constructor(private router: Router,
        private loginservice: AuthenticationService,
        private formBuilder: FormBuilder, ) { }
    
    ngOnInit() { }


    checkLogin() {
        this.newCustomer.email = this.loginForm.value.email
        this.newCustomer.password = this.loginForm.value.password
        if (this.loginservice.authenticate(this.newCustomer)) {
            this.invalidLogin = false
            this.router.navigate(['customer-page'])
        } else {
            // sessionStorage.removeItem('email')
            this.invalidLogin = true
        }
            
    }
}
