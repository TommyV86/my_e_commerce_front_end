import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from 'src/app/model/person/person';
import { ConstantUtility } from 'src/app/utility/constant/constant.utility';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private urlSave : string = "save";
  private body!: Object;
  private isAuth: boolean = false;
  private userRole: string | undefined | null;


  public constructor(
    private httpClient : HttpClient, 
    private constantUtil: ConstantUtility
  ) { }

  public createAccount(user: Person) : Observable<any> {
    return this.httpClient.post(
      this.constantUtil.getLocalHost() + 
      this.constantUtil.getRegisterRoute() + 
      this.urlSave, user
    );
  }

  public login(email: string, password: string) : Observable<any> {
    this.body = { email, password };

    return this.httpClient.post(
      this.constantUtil.getLocalHost() + 
      this.constantUtil.getUrlLoginCheck(), this.body,
      { headers: {'Content-Type': 'application/json'},
        withCredentials: true 
      }
    )
  }

  public getAuthBool(): boolean {
    return this.isAuth;
  }

  public setAuthenticatedBool(bool: boolean): boolean {
    return this.isAuth = bool;
  }

  public getUserRole(): string | undefined | null {
    return this.userRole;
  }

  public setUserRole(role: string | null): void {
    this.userRole = role;
  }

  public logout() : void {
    this.setAuthenticatedBool(false);
    this.setUserRole(null);
  }
}
