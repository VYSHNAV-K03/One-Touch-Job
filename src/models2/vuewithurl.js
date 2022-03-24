const mongoose = require("mongoose");

const vuewithurl = new mongoose.Schema(
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

const VueUrl = mongoose.model("VUEURL", vuewithurl);

module.exports = VueUrl;
