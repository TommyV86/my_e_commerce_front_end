import { Component, NgZone } from '@angular/core';
import { Cart } from 'src/app/model/cart/cart';
import { Product } from 'src/app/model/product/product';
import { CartToolUtility } from 'src/app/utility/cart-tool/cart-tool';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  protected products : Product[] | null | undefined = [];
  protected totalSum : number = 0;
  protected isZero!: boolean;

  // injecter la classe Cart
  public constructor(
    private cart: Cart,
    private cartTool: CartToolUtility,
    private ngZ: NgZone
  ){}

  protected ngOnInit() : void {
    this.updateTable();
  }

  private updateTable() : void {
    this.products = this.cart.getProducts();
  }

  protected getTotalSum() : number {
    return this.cartTool.totalPrice(this.totalSum, this.products!, this.ngZ);
  }

  protected increase(name: string | null) : void {
    this.cartTool.increaseProductIntoCart(name, this.products);
  }

  protected decrease(name: string | null, qty: number) : void {
    this.cart.setProducts(this.cartTool.decreaseProductIntoCart(name, this.products, qty));
    this.products = this.cart.getProducts();
  }

  protected delete(name: string | null, qty: number) : void {
    this.cart.setProducts(this.cartTool.deleteProduct(this.products, name, qty));
    this.products = this.cart.getProducts();
  }
}
