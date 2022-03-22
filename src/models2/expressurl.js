const mongoose = require("mongoose");

const expresswithurl = new mongoose.Schema(
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

const ExpressUrl = mongoose.model("EXPRESSURL", expresswithurl);

module.exports = ExpressUrl;
