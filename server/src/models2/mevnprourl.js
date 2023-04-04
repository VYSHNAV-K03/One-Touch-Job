const mongoose = require("mongoose");

const mevnprowithurl = new mongoose.Schema(
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

const MevnUrl = mongoose.model("MEVNURL", mevnprowithurl);

module.exports = MevnUrl;
