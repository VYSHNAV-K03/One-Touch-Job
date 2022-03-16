const mongoose = require("mongoose");

const Internshipoffschema = new mongoose.Schema(
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

const InternshipOff = mongoose.model("InternshipOff", Internshipoffschema);

module.exports = InternshipOff;
