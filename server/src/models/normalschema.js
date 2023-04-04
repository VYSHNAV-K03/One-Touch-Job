const mongoose = require("mongoose");

const normalschema = new mongoose.Schema(
  {
    videos: [Object],
  },
  { timestamps: true }
);

const Normal = mongoose.model("NORMAL", normalschema);

module.exports = Normal;
