import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router) {  }

    ngOnInit(): void {
    }

    logOut() {
        this.authenticationService.logOut();
        this.router.navigate(['']);
    }
}
