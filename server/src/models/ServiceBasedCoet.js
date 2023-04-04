const mongoose = require("mongoose");

const servicecoetschema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    salary: {
      type: String,
      trim: true,
      required: true,
    },
    url: {
      type: String,
      trim: true,
      required: true,
    },
    photo: { data: Buffer, contentType: String },
  },
  { timestamps: true }
);

const ServiceBasedCoet = mongoose.model("SERVICEBASEDCOET", servicecoetschema);

module.exports = ServiceBasedCoet;
