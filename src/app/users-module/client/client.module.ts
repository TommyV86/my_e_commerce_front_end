import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ClientRoutingModule } from './client-routing.module';
import { CartComponent } from 'src/app/component/client/cart/cart.component';
import { SuccessCommandComponent } from 'src/app/component/client/success-command/success-command.component';
import { AccountComponent } from 'src/app/component/client/account/account.component';


@NgModule({
  declarations: [
    CartComponent,
    SuccessCommandComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
