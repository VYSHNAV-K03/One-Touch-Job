const mongoose = require("mongoose");

const productcoetschema = new mongoose.Schema(
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

const ProductBasedCoet = mongoose.model("ProductBasedCoet", productcoetschema);

module.exports = ProductBasedCoet;
