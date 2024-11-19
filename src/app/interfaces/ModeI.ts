import { ResponseI } from "./ResponseI";

export interface ModeData extends ResponseI {
    data:    ModeI[];
}

export interface ModeI {
    id:    number;
    code:  string;
    name:  string;
}
