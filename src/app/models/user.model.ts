export interface User {
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  confirmed?: boolean;
  type: string;
  created_timestamp: number;
}

export enum UserTypeEnum {
  evaluator = "evaluator",
  candidate = "candidate"
}

export interface Evaluator extends User {
  organisation: string;
  corrected_programs_left: number;
  groupsInCharge: Array<string>;
  assignmentsCreated: Array<string>;
}

export interface Candidate extends User {
  candidateGroupsField: Array<string>;
}
