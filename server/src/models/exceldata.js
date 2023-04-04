const mongoose = require("mongoose");

const exceldata = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    questionset1: [Object],
    questionset2: [Object],
    questionset3: [Object],
    questionset4: [Object],
    questionset5: [Object],
    questionset6: [Object],
  },
  { timestamps: true }
);

const Excel = mongoose.model("EXCEL", exceldata);

module.exports = Excel;
