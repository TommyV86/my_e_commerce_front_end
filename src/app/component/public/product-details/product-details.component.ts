import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/model/cart/cart';
import { ProductExemplary } from 'src/app/model/product-exemplary/product-exemplary';
import { Product } from 'src/app/model/product/product';
import { ProductService } from 'src/app/service/product-service/product.service';
import { CartToolUtility } from 'src/app/utility/cart-tool/cart-tool';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {


  protected products : Product[] | null = [];
  protected productName!: string;
  protected product!: Product;
  protected loading!: boolean;
  protected isAlreadyPresent!: boolean | undefined;

  public constructor(
    private route: ActivatedRoute,
    private prodServ: ProductService,
    private cart: Cart,
    private cartTool: CartToolUtility
  ){}

  public ngOnInit() : void {

    this.route.paramMap.subscribe(params => {
      this.productName = String(params.get('name'));
    })
    this.getProductByName();
    this.products = this.cart.getProducts();
  }

  public getProductByName() : void {
    this.loading = true; 
    this.prodServ.getByName(this.productName).subscribe({
      next:(data: Product)=>{
        this.product = data;
        console.log('product', this.product);        
      },
      error:(e)=>{
        console.log('error : ', e);
      },
      complete:()=>{
        this.loading = false;
        console.log('get by name complete');
      }
    })
  }

  public add() : void {

    this.cartTool.addProductOrIncrease(this.products, this.product);
  
  }
}
