import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/model/person/person';
import { ConstantUtility } from 'src/app/utility/constant/constant.utility';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private urlSave : string = "save";

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

  public login(){}
}
