const router = require("express").Router();
const passport = require("passport");
const { Guilds } = require("../utils/api");
const User = require("../database/schemas/User");

router.get("/", passport.authenticate('auth'));
router.get("/callback", passport.authenticate("auth"), (req, res) => {
  res.redirect("https://sixcord.xyz");
});

module.exports = router;
