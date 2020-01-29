import { Assignment } from './assignment.model';
import { Candidate } from './user.model';

export interface Group {
  id_eval: string;
  name: string;
  assignments: Array<Assignment>;
  candidates: Array<Candidate>;
}
