import express from "express";
import { Router } from "express";
import authController from "../controllers/auth.controllers.js";
import authGuard from "../middleware/auth.guard.js";
import validate from "../utils/validator.js";

const router = Router()
export const app = express();
app.use(express.json())

app.post("/register", validate("register"), authController.register);
app.post("/login", validate("login"), authController.login);
app.get("/user", authGuard, authController.getUser);
app.get("/logout", authGuard, authController.logout);


router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// router.all('*',  (req, res) => res.status(200).json({'error': 'Bad Request.'}))

app.listen(3000, () => console.log(`Listen port `));

export default app;
