import express from "express";
import dotenv from "dotenv";
import authRoutes from "./src/routes/auth.route.js";
import cors from "cors";
import { mongoDB } from "./src/lib/db.js";
import cookieParser from "cookie-parser";
import msgRoutes from "./src/routes/msg.route.js";

dotenv.config(); // load .env variables

const app = express();
const PORT = process.env.PORT || 3000; // fallback if .env is missing
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/msg", msgRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  mongoDB();
});
