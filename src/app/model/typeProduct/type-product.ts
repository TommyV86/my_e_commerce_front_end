export class TypeProduct {

    private _name!: string | null;

    public getName() : string | null {
        return this._name;
    }

    public setName(name: string | null) : this {
        this._name = name;
        return this;
    }
}
