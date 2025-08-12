import express from "express";

import { protectedRoutes } from "../middleware/auth.middleware.js";
import {
  getUser,
  getMessages,
  sendMessage,
} from "../controllers/msg.controller.js";

const router = express.Router();

router.get("/user", protectedRoutes, getUser);
router.get("/:id".protectedRoutes, getMessages);
router.post("/send", protectedRoutes, sendMessage);

export default router;
