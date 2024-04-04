import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from 'src/app/component/client/cart/cart.component';
import { CreateAccountComponent } from 'src/app/component/client/create-account/create-account.component';
import { LoginComponent } from 'src/app/component/client/login/login.component';

const routes: Routes = [
  { path: "cart", component: CartComponent },
  { path: "create-account", component: CreateAccountComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
