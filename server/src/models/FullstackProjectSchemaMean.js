const mongoose = require("mongoose");

const fullstackprojectmeanschema = new mongoose.Schema(
  {
    videos: [Object],
  },
  { timestamps: true }
);

const FullstackProjectsMean = mongoose.model(
  "FULLSTACKPROJECTSMEAN",
  fullstackprojectmeanschema
);

module.exports = FullstackProjectsMean;
