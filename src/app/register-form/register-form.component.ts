import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../service/customer';
import { CustomerService } from '../service/customer.service';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

    items = this.registerService.getItems()

    newCustomer: Customer = {
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: 'customer'
    }

    registerForm = this.formBuilder.group({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: 'CUSTOMER'
    })

    constructor(private registerService: RegisterService, 
        private formBuilder: FormBuilder, 
        private customerService: CustomerService,
        private router: Router  
    ) { }

    ngOnInit(): void { }
    
    signup(){
        this.newCustomer.firstName = this.registerForm.value.firstName
        this.newCustomer.lastName = this.registerForm.value.lastName
        this.newCustomer.email = this.registerForm.value.email
        this.newCustomer.password = this.registerForm.value.password
        this.newCustomer.role = this.registerForm.value.role
        this.customerService.addCustomer(this.newCustomer).subscribe();
        this.router.navigate([''])
    }

}
