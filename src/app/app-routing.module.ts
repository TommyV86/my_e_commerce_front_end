import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from './utility/roleGuard.utility';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./users-module/public/public.module').then((m) => m.PublicModule),
  },

  {
    path:'client',
    loadChildren: () => import('./users-module/client/client.module').then((m) => m.ClientModule),
    canActivate: [RoleGuard],
    data: { role: 'ROLE_USER' }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
