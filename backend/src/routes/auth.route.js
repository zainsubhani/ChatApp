import express from "express";
import {
  signin,
  signup,
  logout,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protectedRoutes } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", signin);
router.post("/logout", logout);
router.put("/updateProfile", protectedRoutes, updateProfile);

export default router;
