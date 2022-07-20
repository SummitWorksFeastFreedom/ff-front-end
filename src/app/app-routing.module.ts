import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { ItemsFormComponent } from './items-form/items-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProviderFormComponent } from './provider-form/provider-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  {path:'login-form', component:LoginFormComponent},
  {path:'register-form', component:RegisterFormComponent},
  {path:'provider-form', component:ProviderFormComponent},
  {path:'', component:HomeFormComponent},
  {path:'items-form', component:ItemsFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
