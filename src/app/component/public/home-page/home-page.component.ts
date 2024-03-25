import { Component } from '@angular/core';
import { Product } from 'src/app/model/product/product';
import { ProductService } from 'src/app/service/product-service/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  protected products!: Product[];
  protected loading!: boolean;

  public constructor(private prodSev: ProductService){}

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
}
