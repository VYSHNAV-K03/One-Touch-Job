const mongoose = require("mongoose");

const startupcoetschema = new mongoose.Schema(
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

const StartupCoet = mongoose.model("StartupCoet", startupcoetschema);

module.exports = StartupCoet;
