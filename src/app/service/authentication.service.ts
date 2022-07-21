import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    customer: Customer | undefined;

    constructor(private customerService: CustomerService) { }

    authenticate(email: string, password: string) {
        this.customerService.login(email, password).subscribe(
            (response: Customer) => {
                this.customer = response;
                if (email === this.customer?.email) {
                    sessionStorage.setItem('email', email)
                    return true;
                } else {
                    alert("Incorrect Email or Password");
                    return false;
                }
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        )
        return true;
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('email')
        return !(user === null)
    }

    checkRole() {

    }

    logOut() {
        sessionStorage.removeItem('email');
    }
}