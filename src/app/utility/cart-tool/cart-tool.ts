import { Injectable, NgZone } from "@angular/core";
import { Product } from "src/app/model/product/product";

@Injectable({
    providedIn: 'root'
})
export class CartToolUtility {

    private isAlreadyPresent!: boolean | undefined;
    private totalTemp! : number;


    public addProductOrIncrease(prods: Product[] | null | undefined, prod: Product) : void {

        this.isAlreadyPresent = prods?.some((pr: Product ) => pr._name === prod._name);
        if(!this.isAlreadyPresent){
            prod._quantity = 1;
            prods?.push(prod);
        } else {
            prods?.forEach((pr: Product) => {
                pr._name === prod._name ? pr._quantity += 1 : null;
            });
        };
        console.log('cart prods : ', prods);
        console.log('taille array : ', prods?.length);
    }

    public deleteProduct(prods: Product[] | null | undefined, name: string | null) : Product[] | null | undefined {
        prods = prods?.filter((pr: Product) => pr._name != name);
        console.log(name ,'deleted');   
        return prods; 
    }


    public increaseProductIntoCart(name: string | null, prods: Product[] | null | undefined) : void {
        prods?.forEach((pr: Product)=> {
            name === pr._name ? pr._quantity += 1 : null;
            console.log('actual ' + pr._name + ' qty: ', pr._quantity);
        });
    }

    public decreaseProductIntoCart(name: string | null, prods: Product[] | null | undefined) : Product[] | null | undefined {
        prods?.forEach((pr: Product)=> {
            name === pr._name ? pr._quantity -= 1 : null;
            if(pr._quantity <= 0){
                prods = this.deleteProduct(prods, name);      
            }
            console.log('actual ' + pr._name + ' qty: ', pr._quantity);
        });
        return prods;
    }


    public totalPrice(total: number, prods: Product[], ng: NgZone) : number {

        this.totalTemp = 0;
        prods.forEach((pr: Product) => this.totalTemp += pr._price! * pr._quantity);
        
        return ng.runOutsideAngular(() =>  total = this.totalTemp );
    }

}
