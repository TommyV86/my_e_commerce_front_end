import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConstantUtility } from 'src/app/utility/constant/constant.utility';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlRoute : string = "product/";
  private urlGetAll : string = "all";
  private urlGetByName : string = "getByName";

  public constructor(
    private httpClient : HttpClient, 
    private constantUtil: ConstantUtility
  ) { }


  public getAll() : Observable<any> {
    return this.httpClient.get(this.constantUtil.getLocalHost() + this.urlRoute + this.urlGetAll);
  }

  public getByName(name: string) : Observable<any>{
    return this.httpClient.get(`${this.constantUtil.getLocalHost() + this.urlRoute + this.urlGetByName}?name=${name}`);
  }
}
