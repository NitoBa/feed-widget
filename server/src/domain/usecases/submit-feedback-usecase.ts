import { SubmitFeedbackDto } from "../dtos/submit-feedback-dto";
import { IFeedbackRepository } from "../repositories/feedback-repository";
import { IMailerRepository } from "../repositories/mailer-repository";

export class SubmitFeedbackUsecase {
  constructor(
    private readonly feedbackRepository: IFeedbackRepository,
    private readonly mailRepository: IMailerRepository
  ) {}

  async execute(feedback: SubmitFeedbackDto): Promise<void> {
    const { type, comment, screenshot } = feedback;

    if (!type || !comment) {
      throw new Error("Missing required fields");
    }

    await this.feedbackRepository.create({ type, comment, screenshot });

    await this.mailRepository.sendMail({
      subject: "New Feedback Received",
      message: [
        `<p>Tipo de feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot &&
          `<div style="border: 1px solid #ccc; border-radius: 8px; padding: 8px; margin-top: 20px;">
            <img width='80%' height='auto' src="${screenshot}" />
          </div>`,
      ],
    });
  }
}
