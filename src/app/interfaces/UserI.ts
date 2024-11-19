import { ResponseI } from "@interfaces/ResponseI";

export interface UserI extends ResponseI { 
    data:    User;
}

export interface User {
    user?:     string;
    business?: string;
    token?:    string;
    rol?:      string[];
    menu?:     Menu[];
}

export interface Menu {
    name:       string;
    icon:       string;
    link:       string;
    tab:        number;
    selected:   number;
}



