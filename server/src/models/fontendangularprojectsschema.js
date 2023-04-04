const mongoose = require("mongoose");

const angularprojectsfrontendschema = new mongoose.Schema(
  {
    videos: [Object],
  },
  { timestamps: true }
);

const FrontendProjectsAngular = mongoose.model(
  "FrontendProjectsAngular",
  angularprojectsfrontendschema
);

module.exports = FrontendProjectsAngular;
