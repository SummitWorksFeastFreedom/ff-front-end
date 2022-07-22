import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Kitchen } from '../service/kitchen';
import { KitchenService } from '../service/kitchen.service';

@Component({
  selector: 'app-kitchen-form',
  templateUrl: './kitchen-form.component.html',
  styleUrls: ['./kitchen-form.component.css']
})
export class KitchenFormComponent implements OnInit {

    items = this.kitchenService.getItems();

    public kitchens: Kitchen[] | undefined;

    newKitchen: Kitchen = {
        id: 0,
        serviceProviderName: '',
        email: '',
        address: '',
        phone: null
    }

    kitchenForm = this.formBuilder.group({
        serviceProviderName: '',
        address: '',
        email: '',
        phone: null
    })

    constructor(private kitchenService: KitchenService, 
        private formBuilder: FormBuilder,
        private router: Router  
    ) { }

    ngOnInit(): void { }
    
    addKitchen(){
        this.newKitchen.serviceProviderName = this.kitchenForm.value.serviceProviderName
        this.newKitchen.address = this.kitchenForm.value.address
        this.newKitchen.email = this.kitchenForm.value.email
        this.newKitchen.phone = this.kitchenForm.value.phone
        this.kitchenService.addKitchen(this.newKitchen).subscribe();
        this.router.navigate(['customer-page']);
    }

}