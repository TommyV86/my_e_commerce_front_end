import { Component } from '@angular/core';
import { Cart } from 'src/app/model/cart/cart';
import { Product } from 'src/app/model/product/product';
import { ProductService } from 'src/app/service/product-service/product.service';
import { CartToolUtility } from 'src/app/utility/cart-tool/cart-tool';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  protected products!: Product[];
  protected loading!: boolean;
  private product!: Product;

  public constructor(
    private prodSev: ProductService,
    private cart: Cart,
    private cartTool: CartToolUtility
  ){}

  //récupération d'une liste de products
  public ngOnInit() : void {
    this.getProducts();
  }

  public getProducts() : void {
    this.loading = true; 
    this.prodSev.getAll().subscribe({
      next: (datas: Product[]) => {
        console.log('datas products fetched: ', datas);
        this.products = datas;
      },
      error: (e) => console.log(e),
      complete: () => {
        this.loading = false;
        console.log('get all products complete');
      }
    })
  }

  public add(name: string | null) : void {

    this.products?.forEach((pr: Product) => {
      name === pr._name ? this.product = pr : null;
    });
    this.cartTool.addProductOrIncrease(this.cart.getProducts(), this.product);
  }
}
