const mongoose = require("mongoose");

const reactwithurl = new mongoose.Schema(
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

const ReactUrl = mongoose.model("REACTURL", reactwithurl);

module.exports = ReactUrl;
