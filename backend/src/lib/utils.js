import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_Scret, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    maxAge: 24 * 60 * 60 * 1000, // only for 1 days
    httpOnly: true, //prevent xss attact cross site attacks
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
  return token;
};
