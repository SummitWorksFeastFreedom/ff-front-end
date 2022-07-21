import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { ProviderFormComponent } from './provider-form/provider-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  {path:'register-form', component:RegisterFormComponent, canActivate:[AuthGuardService]},
  {path:'provider-form', component:ProviderFormComponent, canActivate:[AuthGuardService]},
  {path:'', component:HomeFormComponent},
  {path:'customer-page', component:CustomerPageComponent, canActivate:[AuthGuardService]},
  {path:'items-form', component:CustomerPageComponent, canActivate:[AuthGuardService]},
  {path:'logout', component:LogoutComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
