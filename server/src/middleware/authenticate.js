const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const cookieParser = require("cookie-parser");

require("dotenv").config({
  path: "server/.env",
});

//this is the middleware we use in about page
const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    // console.log(token);
    //decoded token
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    // console.log(verifyToken._id);

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    // console.log(rootUser);
    if (!rootUser) {
      throw new Error("User Not found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (e) {
    res.status(401).send({ error: "Unauthorized:No token provided" });
    // console.log("cookie in auth", req);
  }
};

module.exports = Authenticate;
