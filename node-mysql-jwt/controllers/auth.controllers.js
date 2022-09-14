import User from "../models/user.model.js";
import cache from "../utils/cache.js";
import jwtConfig from "../config/jwt.js";
import jwt from "../utils/jwt.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { email, name, password } = req.body;
  const isExist = await User.findOne({
    where: {
      email
    },
  });
  if (isExist) {
    return res.status(400).json({ error: "Email already exists." });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  return res.json(user);
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    where: {
      email
    },
  });
  if (user) {
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      throw new Error("Your token is invalid");
    }
    const token = await jwt.createToken({ id: user });
    return res.json({
      access_token: token,
      token_type: "Bearer",
      expires_in: jwtConfig.ttl,
    });
  }
  throw new Error("Please check login or password");
};

export const getUser = async (req, res) => {
  const user = await User.findByPk(req.user.id);
  console.log(user,"useer");
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
