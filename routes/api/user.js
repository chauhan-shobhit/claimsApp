require("dotenv/config");

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// Get User Model
const User = require("../../models/User");

// @route   GET /v1/user/health
// @desc    test user route
// @access  public

router.get("/health", (req, res) => res.json({ msg: "User is fine" }));

// @route   GET /v1/user/register
// @desc    register the user
// @access  public

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res
        .status(400)
        .json({ alreadyRegistered: "Account already registered" });
    } else {
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        policyNumber: req.body.policyNumber,
        email: req.body.email,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route   GET /v1/user/login
// @desc    user login
// @access  public

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json({ emailNotFound: "User not found" });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
        };
        jwt.sign(
          payload,
          process.env.ACCESS_TOKEN,
          {
            expiresIn: process.env.EXPIRES,
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res.status(401).json({ password: "Incorrect Password" });
      }
    });
  });
});

router.get(
  "/whoami",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.user.id);
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
    });
  }
);

module.exports = router;
