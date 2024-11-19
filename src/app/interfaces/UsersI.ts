import { ResponseI } from "./ResponseI";

export interface UsersI extends ResponseI{
    data:    UserDataI[];
}

export interface UserDataI {
    id:                number;
    name:              string;
    email:             string;
    email_verified_at: null;
    business_id:       number;
    people_id:         number;
    people:            PeopleI;
    roles:             RoleI[];
}

export interface PeopleI {
    id:         number;
    name:       string;
    dni:        string;
    phone:      string;
    address:    string;
    email:      string;
}

export interface RoleI {
    id:          number;
    name:        string;
    guard_name:  string;
    created_at:  Date;
    updated_at:  Date;
    description: string;
}



