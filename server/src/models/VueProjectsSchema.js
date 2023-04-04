const mongoose = require("mongoose");

const vueprojectsfrontendschema = new mongoose.Schema(
  {
    videos: [Object],
  },
  { timestamps: true }
);

const FrontendProjectsVue = mongoose.model(
  "FrontendProjectsVue",
  vueprojectsfrontendschema
);

module.exports = FrontendProjectsVue;
