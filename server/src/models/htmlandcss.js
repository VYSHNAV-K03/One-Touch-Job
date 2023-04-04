const mongoose = require("mongoose");

const htmlandcssschema = new mongoose.Schema(
  {
    videos: [Object],
  },
  { timestamps: true }
);

const Html = mongoose.model("HTML", htmlandcssschema);

module.exports = Html;
