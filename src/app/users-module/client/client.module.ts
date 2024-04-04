import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ClientRoutingModule } from './client-routing.module';
import { CartComponent } from 'src/app/component/client/cart/cart.component';
import { CreateAccountComponent } from 'src/app/component/client/create-account/create-account.component';
import { LoginComponent } from 'src/app/component/client/login/login.component';


@NgModule({
  declarations: [
    CartComponent,
    CreateAccountComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
