const mongoose = require("mongoose");

const backendschema = new mongoose.Schema(
  {
    videos: [Object],
  },
  { timestamps: true }
);

const BackendProjects = mongoose.model("BACKENDPROJECTS", backendschema);

module.exports = BackendProjects;
