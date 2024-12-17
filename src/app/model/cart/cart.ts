import { Injectable } from "@angular/core";
import { Booking } from "../booking/booking";
import { Person } from "../person/person";
import { ProductExemplary } from "../product-exemplary/product-exemplary";
import { Product } from "../product/product";

@Injectable({
    providedIn: 'root'
})
export class Cart {

    public _productExemplaries: ProductExemplary[] = [];
    public _products: Product[] | null | undefined = [];
    public _person!: Person | null;
    public _booking!: Booking | null;
    public _totalSum!: number | null;
    public _qtyToDelete!: number;


    public getProductExamplaries() : ProductExemplary[] | null | undefined {
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

    public getProducts() : Product[] | null | undefined {
        return this._products;
    }

    public setProducts(products : Product[] | null | undefined) : this {
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


    public getQtyToDelete(): number {
        return this._qtyToDelete;
    }

    public setQtyToDelete(qty: number) : void {
        this._qtyToDelete = qty;
    }
}
