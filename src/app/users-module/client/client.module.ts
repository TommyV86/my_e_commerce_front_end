import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ClientRoutingModule } from './client-routing.module';
import { CartComponent } from 'src/app/component/client/cart/cart.component';
import { SuccessCommandComponent } from 'src/app/component/client/success-command/success-command.component';


@NgModule({
  declarations: [
    CartComponent,
    SuccessCommandComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
