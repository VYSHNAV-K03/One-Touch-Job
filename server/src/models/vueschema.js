const mongoose = require("mongoose");

const vueschema = new mongoose.Schema(
  {
    videos: [Object],
  },
  { timestamps: true }
);

const Vue = mongoose.model("VUE", vueschema);

module.exports = Vue;
