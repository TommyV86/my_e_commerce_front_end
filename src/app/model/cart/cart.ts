import { Injectable } from "@angular/core";
import { Booking } from "../booking/booking";
import { Person } from "../person/person";
import { ProductExemplary } from "../product-exemplary/product-exemplary";
import { Product } from "../product/product";

@Injectable({
    providedIn: 'root'
})
export class Cart {

    private _productExemplaries!: ProductExemplary[] | null;
    private _products!: Product[] | null;
    private _person!: Person | null;
    private _booking!: Booking | null;
    private _totalSum!: number | null;


    public getProductExamplaries() : ProductExemplary[] | null {
        return this._productExemplaries;
    }

    public setProductExamplaries(productExemplaries : ProductExemplary[]) : this {
        this._productExemplaries = productExemplaries;
        return this;
    }

    public addProductExamplary(productExemplary: ProductExemplary) : void {
        this._productExemplaries?.push(productExemplary);
    }

    public clearProductExamplaries() : void {
        this._productExemplaries = [];
    }

    public getProducts() : Product[] | null {
        return this._products;
    }

    public setProducts(products : Product[] | null) : this {
        this._products = products;
        return this;
    }

    public addProduct(product: Product) : void {
        this._products?.push(product);
    }

    public clearProducts() : void {
        this._products = [];
    }



    public getPerson() : Person | null {
        return this._person;
    }

    public setPerson(person : Person) : this {
        this._person = person;
        return this;
    }



    public getBooking() : Booking | null {
        return this._booking;
    }

    public setBooking(booking : Booking | null) : this {
        this._booking = booking;
        return this;
    }



    public getTotalSum() : number | null {
        return this._totalSum;
    }

    public setTotalSum(totalSum : number | null) : this {
        this._totalSum = totalSum;
        return this;
    }
}
