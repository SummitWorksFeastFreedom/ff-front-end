import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    customer: Customer | undefined | null;

    constructor(private customerService: CustomerService) { }

    authenticate(customerForm: any) {
        if(this.customerService.login(customerForm).subscribe(
            (response: Customer) => {
                this.customer = response;
                if (customerForm.email === this.customer?.email) {
                    sessionStorage.setItem('email', customerForm.email)
                    return true;
                } else {
                    alert("Incorrect Email or Password");
                    return false;
                }
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        )) {
            return true;
        } else {
            return false;
        }
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('email')
        return !(user === null)
    }

    checkRole() { }

    logOut() {
        sessionStorage.removeItem('email');
    }
}