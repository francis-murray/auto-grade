export interface User {
  _id: string;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  confirmed: boolean;
  type: UserTypeEnum;
  organisation: string;
  user_id: string;
}

enum UserTypeEnum {
  evaluator = 'evaluator',
  candidate = 'candidate'
}

export interface Evaluator extends User {
  groupsInCharge: Array<string>;
  assignmentsCreated: Array<string>;
}

export interface Candidate extends User {
  candidateGroupsField: Array<string>;
}

