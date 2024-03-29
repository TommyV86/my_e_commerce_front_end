import { Component, ElementRef, ViewChild } from '@angular/core';
import { Cart } from 'src/app/model/cart/cart';
import { Product } from 'src/app/model/product/product';
import { ProductService } from 'src/app/service/product-service/product.service';
import { CartToolUtility } from 'src/app/utility/cart-tool/cart-tool';
import { ToastToolUtility } from 'src/app/utility/toast-tool/toast-tool';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  protected displayedProducts!: Product[];
  protected loading!: boolean;
  private product!: Product;
  @ViewChild('toast') toast!: ElementRef;
  protected message!: string;
  protected displayedSelectedProductName!: string | null;

  public constructor(
    private prodSev: ProductService,
    private cart: Cart,
    private cartTool: CartToolUtility,
    private toastTool: ToastToolUtility
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
        this.displayedProducts = datas;
      },
      error: (e) => console.log(e),
      complete: () => {
        this.loading = false;
        console.log('get all products complete');
      }
    })
  }

  public add(name: string | null) : void {

    this.displayedProducts?.forEach((pr: Product) => {
      if(name === pr._name){
        this.product = pr;
        this.displayedSelectedProductName = this.product._name;
      }
    });
    this.message = this.cartTool.addProductOrIncrease(this.cart.getProducts(), this.product);
    this.toastTool.showToast(this.toast);
  }
}
