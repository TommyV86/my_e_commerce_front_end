import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public-routing.module';
import { AppComponent } from 'src/app/app.component';
import { FooterComponent } from 'src/app/component/public/footer/footer.component';
import { HeaderComponent } from 'src/app/component/public/header/header.component';
import { HomePageComponent } from 'src/app/component/public/home-page/home-page.component';
import { ProductDetailsComponent } from 'src/app/component/public/product-details/product-details.component';
import { CreateAccountComponent } from 'src/app/component/public/create-account/create-account.component';
import { LoginComponent } from 'src/app/component/public/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ProductDetailsComponent,
    CreateAccountComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
