const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
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
  async (req, res) => {
    const errors = validationResult(req);
    // returns bad request and json object of errors in an array
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    // check for errors duplicate name / email
    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      // Create new instance of user with required fields
      user = new User({
        name,
        email,
        password
      });

      // Generate salt to use for hashing password
      const salt = await bcrypt.genSalt(10);

      // Hash password
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      res.send("User saved");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// export the router
module.exports = router;
