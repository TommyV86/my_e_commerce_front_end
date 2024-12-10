import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from 'src/app/component/client/account/account.component';
import { CartComponent } from 'src/app/component/client/cart/cart.component';
import { SuccessCommandComponent } from 'src/app/component/client/success-command/success-command.component';

const routes: Routes = [
  { path: "cart", component: CartComponent },
  { path: "success-command", component: SuccessCommandComponent },
  { path: "account", component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
