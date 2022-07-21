import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    items: Customer[] = [];

    getItems(): Customer[] {
        return this.items;
    }
    
    constructor() { }
}
