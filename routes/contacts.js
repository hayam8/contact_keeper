const express = require("express");
const router = express.Router();

// @route   GET api/contacts
// @desc    Get user's contact list
// @access  Private
router.get("/", (req, res) => {
  res.send("Get user's contact list");
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post("/", (req, res) => {
  res.send("Add new contact");
});

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route   DEL api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("Delete new contact");
});

// export the router
module.exports = router;
