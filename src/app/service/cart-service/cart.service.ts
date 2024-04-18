import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/model/cart/cart';
import { ConstantUtility } from 'src/app/utility/constant/constant.utility';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private urlSave : string = "create";

  public constructor(
    private httpClient: HttpClient,
    private constUtil: ConstantUtility
  ) { }

  public save(cart: Cart) : Observable<any> {
    return this.httpClient.post(
      this.constUtil.getLocalHost() +
      this.constUtil.getCartRoute() +
      this.constUtil.getProfile() +
      this.urlSave, cart, this.constUtil.getHttpOptions()
    );
  }
}