export interface User {
  _id: string;
  name: string;
  lastname: string;
  password: string;
  email: string;
  confirmed: boolean;
  type: UserTypeEnum;
}

enum UserTypeEnum {
  evaluator = 'Evaluator',
  candidate = 'Candidate'
}

export interface Evaluator extends User {
  user_id: string;
  organisation: string;
  groupsInCharge: Array<string>;
  assignmentsCreated: Array<string>;
}

export interface Candidate extends User {
  user_id: string;
  organisation: string;
  candidateGroupsField: Array<string>;
}

