import { Person } from "../person/person";

export class Comment {

    private _id!: number | null; 
    private _text!: string | null;
    private _person!: Person | null;

    public getId() : number | null {
        return this._id;
    }


    public getText() : string | null{
        return this._text;
    }

    public setText(text : string | null) : this {
        this._text = text;
        return this;
    }

    public getPerson() : Person | null {
        return this._person;
    }

    public setPerson(person : Person) : this {
        this._person = person;
        return this;
    }
}
