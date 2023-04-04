const mongoose = require("mongoose");

const nodeschema = new mongoose.Schema(
  {
    videos: [Object],
  },
  { timestamps: true }
);

const Node = mongoose.model("NODE", nodeschema);

module.exports = Node;
