import { Injectable } from "@angular/core";
import { Booking } from "../booking/booking";
import { Comment } from "../comment/comment";

@Injectable({
    providedIn: 'root'
})
export class Person {

    private _id!: number | null; 
    private _firstname!: string | null;
    private _lastname!: string | null;
    private _email!: string | null;
    private _password!: string | null;
    private _comments!: Comment[] | null;
    private _bookings!: Booking[] | null;
    private _token!: any;

    public getId() : number | null {
        return this._id;
    }

    public setId(id: number) : this {
        this._id = id;
        return this;
    }

    
    public getFirstname() : string | null{
        return this._firstname;
    }

    public setFirstname(firstname : string | null) : this {
        this._firstname = firstname;
        return this;
    }

    public getLastname() : string | null{
        return this._lastname;
    }

    public setLastname(lastname : string | null) : this {
        this._lastname = lastname;
        return this;
    }



    public getEmail() : string | null{
        return this._email;
    }

    public setEmail(email : string | null) : this {
        this._email = email;
        return this;
    }



    public getPassword() : string | null {
        return this._password;
    }

    public setPassword(password : string | null) : this {
        this._password = password;
        return this;
    }



    public getComments() : Comment[] | null{
        return this._comments;
    }

    public setComments(comments : Comment[] | null) : this {
        this._comments = comments;
        return this;
    }


    
    public getBookings() : Booking[] | null {
        return this._bookings;
    }

    public setBookings(bookings : Booking[] | null) : this {
        this._bookings = bookings;
        return this;
    }

    public getToken() : any {
        return this._token;
    }

    public setToken(token: any) : this {
        this._token = token;
        return this;
    }
}
