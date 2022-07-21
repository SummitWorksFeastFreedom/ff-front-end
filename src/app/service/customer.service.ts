import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class CustomerService {

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(`${this.apiServerUrl}/customer/all`);
    }

    public addCustomer(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>(`${this.apiServerUrl}/customer/create`, customer);
    }

    public login(email: string, password: string): Observable<Customer> {
        return this.http.get<Customer>(`${this.apiServerUrl}/login/${email}/${password}`);
    }

}