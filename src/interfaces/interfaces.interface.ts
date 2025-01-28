export interface Response<T> {
  response: { data: T };
  success: boolean;
  message: string;
  timestamp: string;
}
