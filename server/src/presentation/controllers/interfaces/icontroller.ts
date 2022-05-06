import { IHttpResponse } from "./ihttp-response";

export interface IController<T = any> {
  handle(req: T): Promise<IHttpResponse>;
}
