import express from "express";
import dotenv from "dotenv";

dotenv.config(); // load .env variables

const app = express();
const PORT = process.env.PORT || 3000; // fallback if .env is missing

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
