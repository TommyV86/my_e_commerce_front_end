import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/model/cart/cart';
import { CartToolUtility } from 'src/app/utility/cart-tool/cart-tool';
import { ConstantUtility } from 'src/app/utility/constant/constant.utility';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private urlSave : string = "create";
  private urlGetAllByIdClient : string = "get_all_by_id";
  private message! : string;

  public constructor(
    private httpClient: HttpClient,
    private constUtil: ConstantUtility,
    private cartTool: CartToolUtility
  ) { }

  public save(cart: Cart) : Promise<string> {

    return new Promise<string>(() => {

      this.httpClient.post(
        this.constUtil.getLocalHost() +
        this.constUtil.getCartRoute() +
        this.constUtil.getProfile() +
        this.urlSave, cart, this.constUtil.getHttpOptions()
      ).subscribe({
        next: (res: any) => {
          //redirection au login
          console.log('back end resp :', res);
          this.message = 'commande prise en compte !'; 
          this.cartTool.clearProducts(cart);
        },
        error: (e: any) => {
          this.message = 'une erreur est survenue, veuillez recommencer'; 
          console.log(e);
        },
        complete: () => console.log('Save cart process ended')
      });
    });
  }

  public getAllByIdClient(id: number | null): Observable<any>{
    return this.httpClient.get(
    `${this.constUtil.getLocalHost() + 
      this.constUtil.getCartRoute() +
      this.constUtil.getProfile() +
      this.urlGetAllByIdClient}?id=${id}`
    );
  }
}