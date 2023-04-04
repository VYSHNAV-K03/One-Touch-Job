const mongoose = require("mongoose");

const coursesschema = new mongoose.Schema({
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
