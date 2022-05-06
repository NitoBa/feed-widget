export interface IHttpResponse<T = any> {
  status: number;
  body: T;
}
