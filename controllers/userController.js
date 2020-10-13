const express = require("express");
const router = express.Router();
const db = require("../models");

// API Routes
router.post("api/user", (req, res) => {
  db.User.create(req.body)
    .then((newUser) => {
      res.json(newUser);
    })
    .catch(() => {
      console.log();
    });
});

module.exports = router;
