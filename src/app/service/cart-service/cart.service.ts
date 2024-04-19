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
  private message! : string;

  public constructor(
    private httpClient: HttpClient,
    private constUtil: ConstantUtility
  ) { }

  public save(cart: Cart) : Promise<string> {

    return new Promise<string>((resolve, reject) => {

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
          resolve(this.message);
        },
        error: (e: any) => {
          this.message = 'une erreur est survenue, veuillez recommencer'; 
          console.log(e);
          reject(e);
        },
        complete: () => console.log('Save cart process ended')
      });
    });
  }
}