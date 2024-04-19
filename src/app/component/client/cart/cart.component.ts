import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cart } from 'src/app/model/cart/cart';
import { Person } from 'src/app/model/person/person';
import { Product } from 'src/app/model/product/product';
import { CartService } from 'src/app/service/cart-service/cart.service';
import { ProductExemplaryService } from 'src/app/service/product-exemplary-service/product-exemplary.service';
import { CartToolUtility } from 'src/app/utility/cart-tool/cart-tool';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  protected form!: FormGroup;
  protected products : Product[] | null | undefined = [];
  protected totalSum : number = 0;
  protected isZero!: boolean;
  protected message!: string;

  // injecter la classe Cart
  public constructor(
    private fb: FormBuilder, 
    private cart: Cart,
    private person: Person,
    private cartTool: CartToolUtility,
    private cartServ: CartService,
    private prodExServ: ProductExemplaryService,
    private ngZ: NgZone,
  ){}

  protected ngOnInit() : void {
    this.updateTable();
    this.form = this.fb.group({});
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

  protected async onSubmit() : Promise<void> {
    this.cart.setPerson(this.person);
    this.cart.setTotalSum(this.getTotalSum());
    console.log(this.cart);
    
    try {

      this.cart.setPerson(this.person);
      this.cart.setTotalSum(this.getTotalSum());
      
      await this.cartServ.save(this.cart);
      this.prodExServ.save(this.cart);

    } catch (error: any) {
      console.log(error);    
    }  
  }
}
