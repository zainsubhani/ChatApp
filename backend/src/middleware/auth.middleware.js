import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { StatusCodes } from "http-status-codes";

export const protectedRoutes = async (req, res, next) => {
  try {
    const tokenUser = req.cookies.jwt;
    if (!tokenUser) {
      return res
        .status(StatusCodes.FORBIDDEN)
        .json({ message: "unauthorized", success: false });
    }
    const decoded = jwt.verify(tokenUser, process.env.JWT_Scret);
    if (!decoded) {
      return res
        .status(StatusCodes.FORBIDDEN)
        .json({ message: "unauthorized", success: false });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "User Not Found", success: false });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("eroor in middleware");
    res
      .status(StatusCodes.BAD_GATEWAY)
      .json({ message: "internal error", success: false });
  }
};
