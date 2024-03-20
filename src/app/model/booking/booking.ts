import { Cart } from "../cart/cart";
import { Person } from "../person/person";

export class Booking {

    private _id!: number | null; 
    private _status!: boolean | null;
    private _date_booking!: Date | null;
    private _person!: Person | null;
    private _cart!: Cart | null;

    public getId() : number | null {
        return this._id;
    }

    public getStatus() : boolean | null{
        return this._status;
    }

    public setStatus(status : boolean | null) : this {
        this._status = status;
        return this;
    }



    public getDateBooking() : Date | null{
        return this._date_booking;
    }

    public setDateBooking(date_booking : Date | null) : this {
        this._date_booking= date_booking;
        return this;
    }



    public getPerson() : Person | null {
        return this._person;
    }

    public setPerson(person : Person) : this {
        this._person = person;
        return this;
    }



    public getCart() : Cart | null {
        return this._cart;
    }

    public setCart(cart : Cart) : this {
        this._cart = cart;
        return this;
    }

}
