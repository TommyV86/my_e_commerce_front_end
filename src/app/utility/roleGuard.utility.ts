import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

    private expectedRole!: string;

    public constructor(
        private authServ: AuthenticationService,
        private router: Router
    ){}

    public canActivate(route: ActivatedRouteSnapshot): boolean {
        this.expectedRole = route.data['role'];

        if (this.authServ.getUserRole() != this.expectedRole || 
            this.authServ.getUserRole() == undefined  && 
            !this.authServ.getAuthBool()) 
        {           
            console.error('RoleGuard: expectedRole not provided in route data');
            this.router.navigate(['/']); // Redirect to an unauthorized page
            return false;
        }
        return true;
    }
}
