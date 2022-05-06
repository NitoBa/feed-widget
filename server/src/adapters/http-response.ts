import { IHttpResponse } from "../presentation/controllers/interfaces/ihttp-response";

export class HttpResponse {
  static ok<T = any>(body: T): IHttpResponse<T> {
    return {
      status: 200,
      body,
    };
  }

  static created<T = any>(body: T): IHttpResponse<T> {
    return {
      status: 201,
      body,
    };
  }

  static badRequest<T = any>(body: T): IHttpResponse<T> {
    return {
      status: 400,
      body,
    };
  }
}
