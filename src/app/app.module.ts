import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { KitchenFormComponent } from './kitchen-form/kitchen-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    HomeFormComponent,
    CustomerPageComponent,
    NavbarComponent,
    KitchenFormComponent,
],
imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
