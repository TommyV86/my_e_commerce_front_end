import { Booking } from "../booking/booking";
import { Person } from "../person/person";
import { ProductExemplary } from "../product-exemplary/product-exemplary";

export class Cart {

    private _productExemplaries!: ProductExemplary[] | null;
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
