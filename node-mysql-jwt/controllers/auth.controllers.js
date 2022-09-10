import User from "../models/user.model.js";
import cache from "../utils/cache.js";
import jwtConfig from "../config/jwt.js";
import jwt from "../utils/jwt.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export const register = async (req, res) => {
  const isExist = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (isExist) {
    return res.status(400).json({ error: "Email already exists." });
  }
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const id = uuidv4();
  const user = await User.create({
    id,
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  return res.json(user);
};

export const login = async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (user) {
    const isMatched = await bcrypt.compare(req.body.password, user.password);
    if (isMatched) {
      const token = await jwt.createToken({ id: user.id });
      return res.json({
        access_token: token,
        token_type: "Bearer",
        expires_in: jwtConfig.ttl,
        success: true,
      });
    }
  }
  return res.status(401).json({ error: "Unauthorized" });
};

export const getUser = async (req, res) => {
  const user = await User.findByPk(req.user.id);
  return res.json(user);
};

export const logout = async (req, res) => {
  const token = req.token;
  const now = new Date();
  const expire = new Date(req.user.exp);
  const milliseconds = now.getTime() - expire.getTime();
  await cache.set(token, token, milliseconds);

  return res.json({ message: "Logged out successfully" });
};

export default { register, login, getUser, logout };
