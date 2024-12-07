import { ResponseI } from "./ResponseI";

export interface ProposalDataI extends ResponseI { 
    data:    ProposalI[];
}

export interface ProposalI {
    id:   number;
    name: string;
}