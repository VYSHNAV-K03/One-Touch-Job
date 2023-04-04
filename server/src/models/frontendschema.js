const mongoose = require("mongoose");

const frontendschema = new mongoose.Schema({
  coursetype: {
    type: String,
  },
  cstacklev0: {
    type: String,
  },
  cstacklev1: {
    type: String,
  },
});
