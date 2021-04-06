const passport = require("passport");
const DiscordStrategy = require("passport-discord");
const User = require("../database/schemas/User");
const config = require("../../../config.json");

passport.use(new DiscordStrategy({
  clientID: config.clientID,
  clientSecret: config.clientSecret,
  callbackURL: '/api/auth/callback',
  scope: ['identify'],
}, async (accessToken, refreshToken, profile, done) => {
  const { id, username, discriminator, avatar, guilds } = profile;
