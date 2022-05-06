import { Prisma } from "../../database/prisma";
import { SubmitFeedbackDto } from "../../domain/dtos/submit-feedback-dto";
import { IFeedbackRepository } from "../../domain/repositories/feedback-repository";

export class FeedbackRepositoryPrisma implements IFeedbackRepository {
  constructor(private readonly prisma: Prisma) {}
  async create(feedback: SubmitFeedbackDto): Promise<void> {
    await this.prisma.feedback.create({
      data: {
        type: feedback.type,
        comment: feedback.comment,
        screenshot: feedback.screenshot,
      },
    });
  }
}
