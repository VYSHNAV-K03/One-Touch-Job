const mongoose = require("mongoose");

const flutterurl = new mongoose.Schema(
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

const FlutterUrl = mongoose.model("FLUTTERURL", flutterurl);

module.exports = FlutterUrl;
