const mongoose = require("mongoose");

const placedoffschema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    companyname: {
      type: String,
      default: "",
    },
    companytype: {
      type: String,
      default: "",
    },
    salary: {
      type: String,
      default: "",
    },
    dept: {
      type: String,
      default: "",
    },
    profile: {
      data: Buffer,
      contentType: String,
    },
    poster: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

const PlacedOff = mongoose.model("PLACEDOFF", placedoffschema);

module.exports = PlacedOff;
