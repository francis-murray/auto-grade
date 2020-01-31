export class User {
  constructor(
    // public _id: string,
    public firstname: string,
    public lastname: string,
    public password: string,
    public email: string,
    public confirmed: boolean,
    public type: UserTypeEnum,
    public organisation: string,
    public user_id: string,
    private _token: string
  ) {}

  get token() {
    return this._token;
  }
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

