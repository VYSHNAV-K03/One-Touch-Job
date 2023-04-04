const mongoose = require("mongoose");

const jswithurl = new mongoose.Schema(
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

const JsUrl = mongoose.model("JSURL", jswithurl);

module.exports = JsUrl;
