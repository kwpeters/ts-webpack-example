import * as _ from "lodash";

export class Person
{
    private readonly _first: string;
    private readonly _last: string;

    public constructor(first: string, last: string)
    {
        this._first = first;
        this._last  = last;
    }

    public speak(): string
    {
        return "Hello, my name is " + _.join([this._first, this._last], " ");
    }
}
