const mongoose = require("mongoose");

const mongoschema = new mongoose.Schema(
  {
    videos: [Object],
  },
  { timestamps: true }
);

const Mongo = mongoose.model("MONGO", mongoschema);

module.exports = Mongo;
