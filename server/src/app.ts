import express from "express";
import cors from "cors";
import { appRouter } from "./routes/routes";

const app = express();

app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(appRouter);

export { app };
