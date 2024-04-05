import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from 'src/app/component/public/create-account/create-account.component';
import { LoginComponent } from 'src/app/component/public/login/login.component';
import { HomePageComponent } from 'src/app/component/public/home-page/home-page.component';
import { ProductDetailsComponent } from 'src/app/component/public/product-details/product-details.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: 'details-product/:name', component: ProductDetailsComponent },
  { path: "create-account", component: CreateAccountComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
