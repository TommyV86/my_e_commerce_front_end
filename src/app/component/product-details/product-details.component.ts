import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product/product';
import { ProductService } from 'src/app/service/product-service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  protected productName!: string;
  protected product!: Product;
  protected loading!: boolean;

  public constructor(
    private route: ActivatedRoute,
    private prodServ: ProductService
  ){}

  public ngOnInit() : void {

    this.route.paramMap.subscribe(params => {
      this.productName = String(params.get('name'));
    })
    this.getProductByName();
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
}
