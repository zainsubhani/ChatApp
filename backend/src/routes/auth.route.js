import express from "express";

const router = express.Router();

router.post("/signup", (req, res) => {
  res.send("Signup");
});
router.post("/login", (req, res) => {
  res.send("Login");
});
router.post("/logout", (req, res) => {
  res.send("logout");
});

export default router;
