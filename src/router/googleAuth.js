const express = require("express");
const router = express.Router();
const passport = require("passport");
const GOOGLE_USER = require("../models/googleAuthUserSchema");
const cookieParser = require("cookie-parser"); //this is used for getting req.cookies in middleware otherwise we dont get cookies in req in middleware

router.use(cookieParser());

const { OAuth2Client } = require("google-auth-library");
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

const Client_Url = "http://localhost:3000/";

const CLIENT_ID =
  "181670074172-3vbenn2fkul089ttou6fp54pm24t6ogj.apps.googleusercontent.com";

const client = new OAuth2Client(CLIENT_ID);

router.post("/googlelogin", async (req, res) => {
  const { tokenId } = req.body;

  const response = await client.verifyIdToken({
    idToken: tokenId,
    audience: CLIENT_ID,
  });
  const { email_verified, name, email } = response.payload;
  console.log(response.payload);

  if (email_verified) {
    let password = email + process.env.SECRET_KEY;
    let cpassword = email + process.env.SECRET_KEY;

    const user = await User.findOne({ email });
    if (!user) {
      const newUser = new User({
        name,
        email,
        password,
        cpassword,
        socialProfile: response.payload.picture,
      });
      await newUser.save();
      const token = await newUser.generateAuthToken();
      console.log(token);

      res
        .status(200)
        .cookie("jwt", token, {
          httpOnly: true,
        })
        .send(token);
      console.log(newUser);
    } else {
      const token = await user.generateAuthToken();
      console.log(token);

      res
        .status(200)
        .cookie("jwt", token, {
          httpOnly: true,
        })
        .send(token);

      // res.status(200).send(token);
    }
  }
});

module.exports = router;
