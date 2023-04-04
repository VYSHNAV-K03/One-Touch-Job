const mongoose = require("mongoose");

const unityurl = new mongoose.Schema(
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

const UnityUrl = mongoose.model("UNITYURL", unityurl);

module.exports = UnityUrl;


