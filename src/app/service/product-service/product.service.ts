import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConstantUtility } from 'src/app/utility/constant/constant.utility';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlGetAll : string = "product/all";

  public constructor(
    private httpClient : HttpClient, 
    private constantUtil: ConstantUtility
  ) { }


  public getAll():Observable<any>{
    return this.httpClient.get(this.constantUtil.getLocalHost() + this.urlGetAll);
  }
}
