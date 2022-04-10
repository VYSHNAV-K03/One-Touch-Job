const express = require("express");
const router = express.Router();
const passport = require("passport");
const GOOGLE_USER = require("../models/googleAuthUserSchema");
const cookieParser = require("cookie-parser"); //this is used for getting req.cookies in middleware otherwise we dont get cookies in req in middleware

router.use(cookieParser());

const { OAuth2Client } = require("google-auth-library");
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

const fetch = require("node-fetch");

const CLIENT_ID =
  "181670074172-3vbenn2fkul089ttou6fp54pm24t6ogj.apps.googleusercontent.com";

const Heroku_CLIENT_ID =
  "181670074172-vc2fa6775ofksgu4tu47mgf4darh941e.apps.googleusercontent.com";

const client = new OAuth2Client(Heroku_CLIENT_ID);

router.post("/googlelogin", async (req, res) => {
  const { tokenId } = req.body;

  const response = await client.verifyIdToken({
    idToken: tokenId,
    audience: Heroku_CLIENT_ID,
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
router.post("/facebooklogin", async (req, res) => {
  const { accessToken, userID } = req.body;

  const urlGraphFacebook = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;

  const response = await fetch(urlGraphFacebook, {
    method: "GET",
  });
  const response_json = await response.json();

  const { name, email, id } = response_json;

  console.log(response_json);

  let password = email + process.env.SECRET_KEY;
  let cpassword = email + process.env.SECRET_KEY;
  if (email) {
    const user = await User.findOne({ email });
    if (!user) {
      const newUser = new User({
        name,
        email,
        password,
        cpassword,
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
    }
  }
});

module.exports = router;
