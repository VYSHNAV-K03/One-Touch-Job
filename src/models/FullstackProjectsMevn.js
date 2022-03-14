const mongoose = require("mongoose");

const fullstackprojectmevnschema = new mongoose.Schema(
  {
    videos: [Object],
  },
  { timestamps: true }
);

const FullstackProjectsMevn = mongoose.model(
  "FULLSTACKPROJECTSMEVN",
  fullstackprojectmevnschema
);

module.exports = FullstackProjectsMevn;
