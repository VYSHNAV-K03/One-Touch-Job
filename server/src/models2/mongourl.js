const mongoose = require("mongoose");

const mongowithurl = new mongoose.Schema(
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

const MongoUrl = mongoose.model("MONGOURL", mongowithurl);

module.exports = MongoUrl;
