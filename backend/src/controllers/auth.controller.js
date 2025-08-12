import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";

import { userValidationSchema } from "../../validation/validation.user.js";
import User from "../models/user.model.js";
import { generateToken } from "../lib/utils.js";

export const signup = async (req, res) => {
  try {
    await userValidationSchema.validateAsync(req.body, { abortEarly: false });
    const { fullName, email, password, profilePic } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res
        .status(StatusCodes.CONFLICT)
        .json({ message: "Email already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashPassword,
      profilePic,
    });

    await newUser.save();

    generateToken(newUser._id, res);

    return res.status(StatusCodes.CREATED).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.error("Error in signup:", error);

    if (error.isJoi) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        errors: error.details.map((e) => e.message),
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Server error, please try again later",
    });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExit = await User.findOne({ email });
    if (!userExit)
      return res
        .status(StatusCodes.BAD_GATEWAY)
        .json({ message: "Invalid credential", success: false });
    const isPasswordCorrect = await bcrypt.compare(password, userExit.password);
    if (!isPasswordCorrect)
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Invalid Password", success: false });
    generateToken(userExit._id, res);
    res.status(StatusCodes.ACCEPTED).json({
      _id: userExit._id,
      fullName: userExit.fullName,
      email: userExit.email,
      profilePic: userExit.profilePic,
      message: "Login Successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error in login", error.message);
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Interval Error", success: false });
  }
};
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res
      .status(StatusCodes.ACCEPTED)
      .json({ message: "Logout Sucessfully", success: false });
  } catch (error) {
    console.log("Error in login", error.message);
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Interval Error", success: false });
  }
};

export const updateProfile = async (req, res) => {
  res.json({ message: "profile " });
};
