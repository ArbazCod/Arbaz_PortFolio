const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require('../models/users');
const wrapAsync = require("../utils/wrapAsync");
const { saveRedirectUrl } = require("../middleware");
const userControllers = require("../controllers/users");

// Signup
router.get("/signup", userControllers.renderSignup);
router.post("/signup", wrapAsync(userControllers.signupUser));

// Login
router.get("/login", userControllers.renderLogin);
router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userControllers.loginUser // ✅ not renderLogin
);

// Logout
router.get("/logout", userControllers.logoutUser); // ✅ renamed for clarity

module.exports = router;
























































































































































