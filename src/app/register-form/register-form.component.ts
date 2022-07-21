import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

    items = this.registerService.getItems();

    registerForm = this.formBuilder.group({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: 'Select Account Type'
    });

    constructor(private registerService: RegisterService, private formBuilder: FormBuilder) { }

    ngOnInit(): void { }
    
    signup(){
        console.log(this.registerForm.value);
    }

}
