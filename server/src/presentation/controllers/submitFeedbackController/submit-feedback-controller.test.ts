import request from "supertest";

import { app } from "../../../app";
import { Prisma } from "../../../database/prisma";

const prisma = new Prisma();
jest.setTimeout(20000);

const deleteFeedbacks = async () => {
  await prisma.feedback.deleteMany();
};

afterEach(async () => await deleteFeedbacks());

afterAll(async () => await prisma.$disconnect());

describe("SubmitFeedbackController", () => {
  it("should return an error when request no pass correct values", async () => {
    const res = await request(app).post("/feedback").send({});

    expect(res.status).toBe(400);
    expect(res.body).toEqual(
      expect.objectContaining({ error: "Missing required fields" })
    );
  });

  it("should create a new feedback and return status code 201", async () => {
    const res = await request(app).post("/feedback").send({
      type: "BUG",
      comment: "Tem um bug nessa pagina aqui",
      screenshot: "",
    });

    expect(res.status).toBe(201);
    expect(res.body).toEqual(
      expect.objectContaining({ message: "Feedback submit successfully" })
    );
  });
});
