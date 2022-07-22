import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { environment } from 'src/environments/environment';


@Injectable({providedIn: 'root'})
export class CustomerService {
    
    
    private apiServerUrl = environment.apiBaseUrl;
    headers = new HttpHeaders().set('access-control-allow-origin', this.apiServerUrl);
    
    constructor(private http: HttpClient){}

    public getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(`${this.apiServerUrl}/customer/all`, {headers: this.headers});
    }

    public addCustomer(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>(`${this.apiServerUrl}/customer/create`, customer, {headers: this.headers});
    }

    public login(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>(`${this.apiServerUrl}/login`, customer, {headers: this.headers});
    }

}