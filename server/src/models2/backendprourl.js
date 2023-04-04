const mongoose = require("mongoose");

const backendprowithurl = new mongoose.Schema(
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

const BackendUrl = mongoose.model("BACKENDPROURL", backendprowithurl);

module.exports = BackendUrl;
