const mongoose = require("mongoose");

const frontprowithurl = new mongoose.Schema(
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

const FrontProUrl = mongoose.model("FRONTPROURL", frontprowithurl);

module.exports = FrontProUrl;
