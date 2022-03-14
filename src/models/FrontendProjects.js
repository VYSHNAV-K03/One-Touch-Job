const mongoose = require("mongoose");

const frontendschema = new mongoose.Schema(
  {
    videos: [Object],
  },
  { timestamps: true }
);

const FrontendProjects = mongoose.model("FrontendProjects", frontendschema);

module.exports = FrontendProjects;
