import { ResponseI } from "./ResponseI";

export interface StateI { }

export interface StateData extends ResponseI {
    data:    StateI[];
}

export interface StateI {
    id:    number;
    name:  string;
    icon:  string;
    color: string;
}

