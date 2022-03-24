const mongoose = require("mongoose");

const frontproangularwithurl = new mongoose.Schema(
  {
    url: {
      type: String,
      default: "",
    },
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

const FrontProAngularUrl = mongoose.model(
  "FRONTPROANGULARURL",
  frontproangularwithurl
);

module.exports = FrontProAngularUrl;
