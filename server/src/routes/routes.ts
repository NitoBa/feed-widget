import { Router } from "express";
import { feedbackRouter } from "./feedback.routes";

const appRouter = Router();

appRouter.use("/feedback", feedbackRouter);

export { appRouter };
