import { SubmitFeedbackDto } from "../../domain/dtos/submit-feedback-dto";
import { FeedbackEntity } from "../../domain/entities/feedback";
import { IFeedbackRepository } from "../../domain/repositories/feedback-repository";

export class InMemoryFeedbackRepository implements IFeedbackRepository {
  feedbacks: FeedbackEntity[] = [];
  async create(feedback: SubmitFeedbackDto): Promise<void> {
    const newFeedback = new FeedbackEntity();
    Object.assign(newFeedback, feedback);
    this.feedbacks.push(newFeedback);
  }
}
