import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ConstantUtility {

    private token!: string;
    private localhost: string = 'https://localhost:8000/';
    private urlProductRoute : string = "product/";
    private urlRegisterRoute : string = "registration/";
    private urlCartRoute : string = "cart/";
    private urlProductExRoute : string = "product_exemplary/";
    private urlProfile : string = "profile/";
    private urlLoginCheck : string = "api/login_check";
    private urlLogout: string = 'app_logout';
    private httpOptions: any = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `bearer ${this.token}`
        }),
        withCredentials: true
    };



    public getLocalHost() : string {
        return this.localhost;
    }

    public getProductRoute() : string {
        return this.urlProductRoute;
    }

    public getProductExRoute() : string {
        return this.urlProductExRoute;
    }

    public getRegisterRoute() : string {
        return this.urlRegisterRoute;
    }

    public getCartRoute() : string {
        return this.urlCartRoute;
    }

    public getProfile() : string {
        return this.urlProfile;
    }

    public getUrlLoginCheck() : string {
        return this.urlLoginCheck;
    }
    
    public getUrlLogout() : string {
        return this.urlLogout;
    }

    public getToken() : string {
        return this.token;
    }
    public setToken(token: string): void{
        this.token = token;
    }

    public getHttpOptions() : any {
        return this.httpOptions;
    }
}