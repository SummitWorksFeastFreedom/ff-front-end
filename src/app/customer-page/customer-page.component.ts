import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kitchen } from '../service/kitchen';
import { KitchenService } from '../service/kitchen.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {

    public kitchens: Kitchen[] | undefined;

    constructor(private kitchenService: KitchenService, private router: Router) { }
    

    ngOnInit(): void {
        this.getKitchens();
    }

    public getKitchens(): void {
        this.kitchenService.getKitchens().subscribe(
            (response: Kitchen[]) => {
                this.kitchens = response;
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        )
    }

}
