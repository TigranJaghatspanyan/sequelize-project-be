import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/index.js";
import dotenv from "dotenv";
import cors from "cors";
import env from "./env.js";

const app = express();
dotenv.config();
app.use(express.json());

app.use(cors());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

app.listen(env.PORT, () => console.log(`Listen port ${env.PORT}`));

export default app;
