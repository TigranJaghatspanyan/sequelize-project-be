import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import dotenv from "dotenv";


const app = express();
dotenv.config();
app.use(express.json());

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/api", indexRouter);
app.use("/users", usersRouter);

app.listen(3000, () => console.log(`Listen port `));

export default app;
