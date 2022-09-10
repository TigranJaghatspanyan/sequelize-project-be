import { Router } from "express";
import {
  getUser,
  login,
  logout,
  register,
} from "../controllers/auth.controllers.js";
import authGuard from "../middleware/auth.guard.js";
import validate from "../utils/validator.js";

const router = Router();

router.post("/register", validate("register"), register);
router.post("/login", validate("login"), login);
router.get("/user", authGuard, getUser);
router.get("/logout", authGuard, logout);

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

export default router;
