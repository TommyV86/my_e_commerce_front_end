import { Component } from '@angular/core';
import { Cart } from 'src/app/model/cart/cart';
import { Person } from 'src/app/model/person/person';
import { ProductExemplary } from 'src/app/model/product-exemplary/product-exemplary';
import { Product } from 'src/app/model/product/product';
import { CartService } from 'src/app/service/cart-service/cart.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  //extraire uniquement les tableaux de _products de chaque panier
  protected cart: Cart = new Cart();
  protected cartsToDisplay: Cart[] = [];

  public constructor(
    private user: Person,
    private cartServ: CartService
  ){}

  public ngOnInit(): void {
    //recuperer les paniers de l'user
    this.getCarts();
  }

  public getCarts(): void {
    this.cartServ.getAllByIdClient(this.user.getId()).subscribe({
      next: (datas: Cart[]) => {
        console.log('datas: ', datas);
        datas.forEach((cart: Cart)=> {
          if (cart._productExemplaries) {
            this.cart = cart;
            this.cart._productExemplaries = cart._productExemplaries;
            this.cart.totalSum = cart.totalSum;
            this.cartsToDisplay.push(this.cart);
          }
        })
        console.log('datas products from carts fetched : ', this.cartsToDisplay);
      },
      error: (e) => console.log(e),
      complete: () => {
        console.log('get all carts complete');
      }
    })
  }
  
}
