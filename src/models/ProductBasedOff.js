const mongoose = require("mongoose");

const serviceoffschema = new mongoose.Schema(
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

const ProductBasedOff = mongoose.model("ProductOff", serviceoffschema);

module.exports = ProductBasedOff;
