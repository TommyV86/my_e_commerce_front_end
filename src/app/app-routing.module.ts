import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./users-module/public/public.module').then((m) => m.PublicModule),
  },

  {
    path:'client',
    loadChildren: () => import('./users-module/client/client.module').then((m) => m.ClientModule),
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
