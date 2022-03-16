const mongoose = require("mongoose");

const portfolioschema = new mongoose.Schema(
  {
    photo: { data: Buffer, contentType: String },
    first_name: String,
    last_name: String,
    address: String,
    city: String,
    state: String,
    phone_number: String,
    website: String,
    email: String,
    objective: String,
    education: [
      {
        institution_name: String,
        course: String,
        grade: String,
        start_date: Date,
        end_date: Date,
        edu_description: String,
      },
    ],
    certification: [
      {
        course_name: String,
        cer_organisation: String,
        cer_description: String,
      },
    ],
    workexp: [
      {
        wrk_organisation: String,
        role: String,
        wrk_start_date: Date,
        wrk_end_date: Date,
        wrk_description: String,
      },
    ],
    skill: [String],
    hobbies: [String],
    language: [
      {
        language_name: String,
        read: { type: Boolean, default: false },
        write: { type: Boolean, default: false },
        speak: { type: Boolean, default: false },
        level: String,
      },
    ],
  },
  { timestamps: true }
);

const PortfolioModel = mongoose.model("portfoliomodel", portfolioschema);

module.exports = PortfolioModel;
