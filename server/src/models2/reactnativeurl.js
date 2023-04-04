const mongoose = require("mongoose");

const reactnativeurl = new mongoose.Schema(
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

const ReactNativeUrl = mongoose.model("REACTNATIVEURL", reactnativeurl);

module.exports = ReactNativeUrl;
