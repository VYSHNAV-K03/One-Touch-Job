const mongoose = require("mongoose");

const expressschema = new mongoose.Schema(
  {
    videos: [Object],
  },
  { timestamps: true }
);

const Express = mongoose.model("EXPRESS", expressschema);

module.exports = Express;
