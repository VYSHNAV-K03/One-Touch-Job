const mongoose = require("mongoose");

const Internshipcoetschema = new mongoose.Schema(
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
    photo: { type: String, trim: true },
  },
  { timestamps: true }
);

const InternshipCoet = mongoose.model("InternshipCoet", Internshipcoetschema);

module.exports = InternshipCoet;
