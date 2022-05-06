import { Router } from "express";
import { routerExpressAdapter } from "../adapters/router-express-adapter";
import { createSubmitFeedbackController } from "../factories/feedback-factory";

const feedbackRouter = Router();

const feedbackController = createSubmitFeedbackController();

feedbackRouter.post("/", routerExpressAdapter(feedbackController));

export { feedbackRouter };
