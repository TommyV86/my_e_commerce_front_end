import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/component/public/home-page/home-page.component';
import { ProductDetailsComponent } from 'src/app/component/public/product-details/product-details.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: 'details-product/:name', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
