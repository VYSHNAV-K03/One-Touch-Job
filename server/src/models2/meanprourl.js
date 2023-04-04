const mongoose = require("mongoose");

const meanprowithurl = new mongoose.Schema(
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

const MeanUrl = mongoose.model("MEANURL", meanprowithurl);

module.exports = MeanUrl;
