const mongoose = require("mongoose");

const mernprowithurl = new mongoose.Schema(
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

const MernUrl = mongoose.model("MERNURL", mernprowithurl);

module.exports = MernUrl;
