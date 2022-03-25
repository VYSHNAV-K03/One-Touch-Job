const mongoose = require("mongoose");

const internshipschema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    domain: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    filepath: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

const Internship = mongoose.model("INTERNSHIP", internshipschema);

module.exports = Internship;
