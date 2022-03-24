const mongoose = require("mongoose");

const frontprovuewithurl = new mongoose.Schema(
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

const FrontProVueUrl = mongoose.model("FRONTPROVUEURL", frontprovuewithurl);

module.exports = FrontProVueUrl;
