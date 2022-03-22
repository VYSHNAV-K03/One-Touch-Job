const mongoose = require("mongoose");

const nodewithurl = new mongoose.Schema(
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

const NodeUrl = mongoose.model("NODEURL", nodewithurl);

module.exports = NodeUrl;
