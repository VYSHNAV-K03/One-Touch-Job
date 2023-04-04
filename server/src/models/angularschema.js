const mongoose = require("mongoose");

const angularschema = new mongoose.Schema(
  {
    videos: [Object],
  },
  { timestamps: true }
);

const Angular = mongoose.model("ANGULAR", angularschema);

module.exports = Angular;
