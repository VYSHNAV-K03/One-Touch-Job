const mongoose = require("mongoose");

const angularwithurl = new mongoose.Schema(
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

const AngularUrl = mongoose.model("ANGULARURL", angularwithurl);

module.exports = AngularUrl;
