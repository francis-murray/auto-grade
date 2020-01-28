
export interface Assignment {
  name: string;
  filename: string;
  author_id: string;
  description: string;
  deadline: string;
  is_valid: number;
  ios: Array<string>;
  stats: Array<Stat>;
}

export interface Stat {
  cpu_time: number;
  file_size: number;
}
