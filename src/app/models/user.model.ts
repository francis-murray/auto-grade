export interface User {
  _id: string;
  name: string;
  lastname: string;
  password: string;
  email: string;
  confirmed: boolean;
  type: UserTypeEnum;
  organisation: string;
  user_id: string;
}

enum UserTypeEnum {
  evaluator = 'Evaluator',
  candidate = 'Candidate'
}

export interface Evaluator extends User {
  groupsInCharge: Array<string>;
  assignmentsCreated: Array<string>;
}

export interface Candidate extends User {
  candidateGroupsField: Array<string>;
}

