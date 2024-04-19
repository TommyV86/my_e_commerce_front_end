import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/model/cart/cart';
import { ConstantUtility } from 'src/app/utility/constant/constant.utility';

@Injectable({
  providedIn: 'root'
})
export class ProductExemplaryService {

  private urlSave: string = "confirm_product_exemplary_in_cart";

  public constructor(
    private httpClient : HttpClient, 
    private constantUtil: ConstantUtility
  ) { }

  
  public save(cart: Cart) : void {
    this.httpClient.post(
      this.constantUtil.getLocalHost() +
      this.constantUtil.getProductExRoute() +
      this.constantUtil.getProfile() +
      this.urlSave, cart, this.constantUtil.getHttpOptions()
    ).subscribe({
      next: (res: any) => {
        console.log('back end resp :', res);
      },
      error: (e: any) => {
        console.log(e);

      },
      complete: () => console.log('Save prod ex process ended')
    });
  }
}
