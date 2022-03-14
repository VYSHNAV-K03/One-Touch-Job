const mongoose = require("mongoose");

const fullstackprojectschema = new mongoose.Schema(
  {
    videos: [Object],
  },
  { timestamps: true }
);

const FullstackProjects = mongoose.model(
  "FULLSTACKPROJECTS",
  fullstackprojectschema
);

module.exports = FullstackProjects;
