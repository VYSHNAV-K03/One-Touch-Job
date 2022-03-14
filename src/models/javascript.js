const mongoose = require("mongoose");

const javascriptschema = new mongoose.Schema(
  {
    videos: [Object],
  },
  { timestamps: true }
);

const Js = mongoose.model("JAVASCRIPT", javascriptschema);

module.exports = Js;
