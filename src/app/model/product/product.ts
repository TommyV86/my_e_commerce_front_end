import { ProductExemplary } from "../product-exemplary/product-exemplary";
import { TypeProduct } from "../typeProduct/type-product";

export class Product {

    private _name!: string | null;
    private _description!: string | null;
    private _price!: number | null;
    private _productExemplaries!: ProductExemplary[] | null;
    private _typeProduct!: TypeProduct | null;


    public getName() : string | null {
        return this._name;
    }

    public setName(name: string | null) : this {
        this._name = name;
        return this;
    }


    public getDescription() : string | null {
        return this._description;
    }

    public setDescription(description: string) : this {
        this._description = description;
        return this;
    }


    public getPrice() : number| null {
        return this._price;
    }

    public setPrice(price: number) : this {
        this._price = price;
        return this;
    }


    public getProductExamplaries() : ProductExemplary[] | null {
        return this._productExemplaries;
    }

    public setProductExamplaries(productExemplaries : ProductExemplary[]) : this {
        this._productExemplaries = productExemplaries;
        return this;
    }


    public getTypeProduct() : TypeProduct | null{
        return this._typeProduct;
    }


    public setTypeProduct(typeProduct: TypeProduct | null) : this {
        this._typeProduct = typeProduct;
        return this;
    }

}
