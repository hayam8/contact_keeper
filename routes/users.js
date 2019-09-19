const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  "/",
  [
    check("name", "Name required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password must be 8 or more characters").isLength({
      min: 8
    })
  ],
  (req, res) => {
    const errors = validationResult(req);
    // returns bad request and json object of errors in an array
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("passed");
  }
);

// export the router
module.exports = router;
