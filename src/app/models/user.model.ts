export interface User {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    organisation: string;
    // confirmed: boolean;
    // type: UserTypeEnum;
    // user_id: string;
  }

export enum UserTypeEnum {
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

