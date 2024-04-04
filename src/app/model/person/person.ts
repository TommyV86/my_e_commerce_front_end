import { Booking } from "../booking/booking";
import { Comment } from "../comment/comment";

export class Person {

    private _id!: number | null; 
    private _firstname!: string | null;
    private _lastname!: string | null;
    private _email!: string | null;
    private _password!: string | null;
    private _comments!: Comment[] | null;
    private _bookings!: Booking[] | null;

    public constructor( 
        private firstname: string | null,
        private lastname: string | null,
        private email: string | null,
        private password: string | null,
    ){
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
        this._password = password;
    }

    public getId() : number | null {
        return this._id;
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
}
