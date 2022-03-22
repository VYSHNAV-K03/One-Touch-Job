const mongoose = require("mongoose");

const reactchema = new mongoose.Schema(
  {
    videos: [Object],
  },
  { timestamps: true }
);

const React = mongoose.model("REACT", reactchema);

module.exports = React;
