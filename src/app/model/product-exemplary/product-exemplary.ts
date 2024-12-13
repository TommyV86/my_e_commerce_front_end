import { Cart } from "../cart/cart";
import { Product } from "../product/product";

export class ProductExemplary {

    public _quantity!: number | null;
    public _imageName!: string| null;
    public _cart!: Cart | null;
    public _product!: Product | null;




    public getQuantity() : number | null {
        return this._quantity;
    }

    public setQuantity(quantity: number | null) : this {
        this._quantity = quantity;
        return this;
    }

    public getImageName() : string | null {
        return this._imageName;
    }

    public setImageName(imageName: string | null) : this {
        this._imageName = imageName;
        return this;
    }

    public getCart() : Cart | null {
        return this._cart;
    }


    public setCart(cart: Cart | null) : this {
        this._cart = cart;
        return this;
    }

    public getProduct() : Product | null{
        return this._product;
    }


    public setProduct(product: Product | null) : this {
        this._product = product;
        return this;
    }


}
