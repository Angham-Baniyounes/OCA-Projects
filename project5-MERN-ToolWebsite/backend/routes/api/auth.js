const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.console.error(err.message);
    res.status(500).send("Server Error");
  }
});
router.post(
  "/login",
  [
    check("username", "Username is required").trim().not().isEmpty(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    try {
      let userLogin = await User.findOne({ username });
      if (!userLogin) {
        // return res.status(400).json({ msg: "User not found" });
        res.send("User not found");
      }
      const isMatch = await bcrypt.compare(password, userLogin.password);
      if (!isMatch) {
        // return res
        //   .status(400)
        //   .json({ msg: "Wrong Username or password" });
        res.send("Wrong Username or password");
      }
      const payload = {
        userLogin: {
          id: userLogin.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ userLogin });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
    console.log(req.body);
  }
);
module.exports = router;
