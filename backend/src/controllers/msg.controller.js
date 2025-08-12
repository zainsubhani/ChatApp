import { StatusCodes } from "http-status-codes";
import User from "../models/user.model.js"; // adjust the path as needed
import Message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.js";

export const getUser = async (req, res) => {
  try {
    const loggedInUser = req.user._id;

    // Find all users except the logged-in user and exclude the password field
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser },
    }).select("-password");

    return res
      .status(StatusCodes.OK)
      .json({ success: true, users: filteredUsers });
  } catch (error) {
    console.error(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: "Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = request.user._id;
    const messages = await Message.find({
      $or: [
        {
          senderId: myId,
          receiverId: userToChatId,
        },
        {
          senderId: userToChatId,
          receiverId: myId,
        },
      ],
    });
    res.status(StatusCodes.OK).json({ messages });
  } catch (error) {
    console.log("error in message controller", error.messages);
    res
      .status(StatusCodes.BAD_GATEWAY)
      .json({ message: "Internal Server Error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverid } = req.param;
    const senderId = req.user._id;
    let imageUrl;
    if (image) {
      // upload base64 image to cloudinary
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }
    const newMessage = new Message({
      senderId,
      receiverid,
      text,
      image: imageUrl,
    });
    await newMessage.save();

    // realtime communication socket.io goes here

    res.status(StatusCodes.ACCEPTED).json({
      message: "send successfully",
    });
  } catch (error) {
    console.log("error in message controller", error.messages);
    res
      .status(StatusCodes.BAD_GATEWAY)
      .json({ message: "Internal Server Error" });
  }
};
