const mongoose = require("mongoose");

const htmlwithurl = new mongoose.Schema(
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

const HtmlUrl = mongoose.model("HTMLURL", htmlwithurl);

module.exports = HtmlUrl;
