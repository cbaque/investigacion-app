import { ResponseI } from "./ResponseI";

export interface ResearchI extends ResponseI {
    data:    ResearchDataI[];
}

export interface ResearchDataI {
  id: number;
  code: string;
  name_project: string;
  faculty: string;
  rcu: string;
  status: string;
  advance: string;
  impact: null;
  observation: null;
  duration: string;
  budget_one: null;
  budget_two: null;
  budget_three: null;
  members: Member[];
  expanded: Boolean;
}

interface Member {
  id: number;
  research_article_id: number;
  user_id: number;
  user: User;
}

interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: null;
  business_id: number;
  people_id: number;
}