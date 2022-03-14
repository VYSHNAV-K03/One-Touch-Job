const mongoose = require("mongoose");

const wordpressschema = new mongoose.Schema(
  {
    videos: [Object],
  },
  { timestamps: true }
);

const Wordpress = mongoose.model("WORDPRESS", wordpressschema);

module.exports = Wordpress;
