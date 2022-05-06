import { HttpResponse } from "../../../adapters/http-response";
import { SubmitFeedbackDto } from "../../../domain/dtos/submit-feedback-dto";
import { SubmitFeedbackUsecase } from "../../../domain/usecases/submit-feedback-usecase";
import { IController } from "../interfaces/icontroller";
import { IHttpResponse } from "../interfaces/ihttp-response";

interface SubmitFeedBackRequest {
  body: SubmitFeedbackDto;
}

export class SubmitFeedbackController
  implements IController<SubmitFeedBackRequest>
{
  constructor(private readonly SubmitFeedbackUsecase: SubmitFeedbackUsecase) {}

  async handle(req: SubmitFeedBackRequest): Promise<IHttpResponse> {
    const { type, comment, screenshot } = req.body;

    try {
      await this.SubmitFeedbackUsecase.execute({ type, comment, screenshot });

      return HttpResponse.created({
        message: "Feedback submit successfully",
      });
    } catch (error) {
      return HttpResponse.badRequest({
        message: error.message,
      });
    }
  }
}
