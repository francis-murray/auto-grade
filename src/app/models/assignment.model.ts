
export interface Assignment {
  name: string;
  filename: string;
  author_id?: string;
  description: string;
  deadline: string;
  is_valid: number;
  ios: Array<Ios>;
  stats: Array<Stat>;
}

export interface Stat {
  cpu_time: number;
  file_size: number;
}

export interface Ios {
  input: string;
  output: string;
}
