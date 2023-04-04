const mongoose = require("mongoose");

const workshopschema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
    },
    url: {
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

const Workshop = mongoose.model("WORKSHOP", workshopschema);

module.exports = Workshop;
