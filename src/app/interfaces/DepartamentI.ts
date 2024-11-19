import { ResponseI } from "./ResponseI";

export interface DepartamentDataI extends ResponseI{
    data:    DepartamentI[];
}

export interface DepartamentI {
    id:   number;
    name: string;
}
