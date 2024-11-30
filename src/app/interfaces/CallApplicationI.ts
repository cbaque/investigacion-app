import { ResponseI } from "./ResponseI";

export interface CallApplicationDataI extends ResponseI { 
    data:    CallApplicationI[];
}

export interface CallApplicationI {
    id:   number;
    name: string;
}