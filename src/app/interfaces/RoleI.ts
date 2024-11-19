import { ResponseI } from "./ResponseI";

export interface RoleDataI extends ResponseI {
    data:    RoleI[];
}

export interface RoleI {
    id:          number;
    name:        string;
    description: string;
}
