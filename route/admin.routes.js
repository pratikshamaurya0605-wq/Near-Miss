const express = require("express");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");

const router = express.Router();
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.sendStatus(403);

  jwt.verify(token, "SECRETKEY", () => next());
}


// Login
router.post("/login", async (req, res) => {
  if (req.body.email === process.env.ADMIN_EMAIL &&
      req.body.password === process.env.ADMIN_PASSWORD) {

    const token = jwt.sign(
      { email: req.body.email },
      "SECRETKEY",
      { expiresIn: "1h" }
    );

    return res.json({ token });
  }
  res.status(401).json({ message: "Invalid login" });
});

router.get("/", auth, async (req, res) => {
  const reports = await Report.find();
  res.json(reports);
});


export default router;