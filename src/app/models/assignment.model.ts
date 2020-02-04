export interface Assignment {
  name: string;
  filename: string;
  author_id?: string;
  description: string;
  deadline: string;
  is_valid: number;
  ios: Array<string>;
  marking_scheme_file_size: string;
  marking_scheme_cpu_time: string;
  marking_scheme_memory_used: string;
}
