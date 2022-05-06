import { randomUUID } from "node:crypto";

export class FeedbackEntity {
  id: string;
  type: string;
  comment: string;
  screenshot: string;

  constructor() {
    this.id = this.id ?? randomUUID();
  }
}
