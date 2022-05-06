import { Request, Response } from "express";
import { IController } from "../presentation/controllers/interfaces/icontroller";

export const routerExpressAdapter = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const response = await controller.handle(req);

    if (response.status >= 200 && response.status <= 299) {
      return res.status(response.status).json(response.body);
    }

    return res.status(response.status).json({
      error: response.body.message,
    });
  };
};
