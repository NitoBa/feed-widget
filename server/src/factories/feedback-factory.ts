import { SubmitFeedbackController } from "../presentation/controllers/submitFeedbackController/submit-feedback-controller";
import { Prisma } from "../database/prisma";
import { SubmitFeedbackUsecase } from "../domain/usecases/submit-feedback-usecase";
import { NodeMailer } from "../external/nodemailer-config";
import { FeedbackRepositoryPrisma } from "../infra/repositories/feedback-repository-prisma";
import { MailerRepositoryNodeMailer } from "../infra/repositories/mailer-repository-nodemailer";

const prisma = new Prisma();
const nodeMailer = new NodeMailer();
const feedbackRepository = new FeedbackRepositoryPrisma(prisma);
const mailRepository = new MailerRepositoryNodeMailer(nodeMailer);

export const createSubmitFeedbackController = (): SubmitFeedbackController => {
  const usecase = new SubmitFeedbackUsecase(feedbackRepository, mailRepository);
  return new SubmitFeedbackController(usecase);
};
