import { SubmitFeedbackDto } from "../dtos/submit-feedback-dto";

export interface IFeedbackRepository {
  create(feedback: SubmitFeedbackDto): Promise<void>;
}
