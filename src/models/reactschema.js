const mongoose = require("mongoose");

const reactchema = new mongoose.Schema(
  {
    videos: [Object],
    URL: [Object],
  },
  { timestamps: true }
);

const React = mongoose.model("REACT", reactchema);

module.exports = React;
