import express from "express";
import dotenv from "dotenv";
import authRoutes from "./src/routes/auth.route.js";
import cors from "cors";

dotenv.config(); // load .env variables

const app = express();
const PORT = process.env.PORT || 3000; // fallback if .env is missing
app.use(cors());

app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
