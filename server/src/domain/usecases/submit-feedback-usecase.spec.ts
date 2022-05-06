import { InMemoryFeedbackRepository } from "../../tests/repositories/in-memory-feedback-repository";
import { InMemoryMailerRepository } from "../../tests/repositories/in-memory-mail-repository";
import { SubmitFeedbackUsecase } from "./submit-feedback-usecase";

const makeSut = () => {
  const mailRepository = new InMemoryMailerRepository();
  const feedbackRepository = new InMemoryFeedbackRepository();
  const sut = new SubmitFeedbackUsecase(feedbackRepository, mailRepository);
  return {
    sut,
    mailRepository,
    feedbackRepository,
  };
};

describe("Submit FeedbackUsecase", () => {
  it("should not create a new feedback without correct values", async () => {
    const { sut } = makeSut();
    await expect(
      sut.execute({
        type: "",
        comment: "",
        screenshot: "",
      })
    ).rejects.toThrow("Missing required fields");
  });

  it("should create a new feedback of type BUG", async () => {
    const { sut, feedbackRepository, mailRepository } = makeSut();

    jest.spyOn(mailRepository, "sendMail");

    await expect(
      sut.execute({
        type: "BUG",
        comment: "New comment",
        screenshot: "",
      })
    ).resolves.toBe(undefined);

    expect(feedbackRepository.feedbacks).toHaveLength(1);
    expect(feedbackRepository.feedbacks[0].type).toBe("BUG");
    expect(mailRepository.sendMail).toHaveBeenCalled();
  });
});
