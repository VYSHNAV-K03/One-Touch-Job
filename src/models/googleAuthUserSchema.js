const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");
require("dotenv").config({
  path: "server/.env",
});

const googleAuthschema = new mongoose.Schema({
  username: String,
  name: String,
  googleId: String,
  secret: String,
  photo: [Object],
});

googleAuthschema.plugin(passportLocalMongoose);
googleAuthschema.plugin(findOrCreate);

const GoogleUser = mongoose.model("GOOGLE_USER", googleAuthschema);

module.exports = GoogleUser;
