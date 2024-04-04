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

    public getRegisterRoute() : string {
        return this.urlRegisterRoute;
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