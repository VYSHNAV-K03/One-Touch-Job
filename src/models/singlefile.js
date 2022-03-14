const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const singleFileSchema = new Schema(
  {
    files: [Object],
  },
  { timestamps: true }
);

module.exports = mongoose.model("SingleFile", singleFileSchema);
