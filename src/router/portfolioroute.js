const { upload } = require("../helpers/filehelper");
const PortfolioModel = require("../models/portfolioschema");
const express = require("express");
const fs = require("fs");
const Authenticate = require("../middleware/authenticate");
const path = require("path");
const User = require("../models/userSchema");
const AuthenticateCoet = require("../middleware/authenticateCoet");
const COET = require("../models/collegeofengineeringthalassery");

const router = express.Router();

router.post(
  "/add/off",
  upload.single("file"),
  Authenticate,
  async (req, res) => {
    const final_path = req.file.path;

    const base64 = fs.readFileSync(final_path, "base64");
    const buffer = Buffer.from(base64, "base64");
    console.log(req.body);
    const user = await User.findByIdAndUpdate(req.userID, {
      portfolio: {
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        phone_number: req.body.phone,
        website: req.body.website,
        email: req.body.email,
        objective: req.body.objective,
        education: [
          {
            institution_name: req.body.institution,
            course: req.body.course,
            grade: req.body.grade,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            edu_description: req.body.edu_description,
          },
        ],
        certification: [
          {
            course_name: req.body.course_name,
            cer_organisation: req.body.cer_organisation,
            cer_description: req.body.cer_description,
          },
        ],
        workexp: [
          {
            wrk_organisation: req.body.wrk_organisation,
            role: req.body.role,
            wrk_start_date: req.body.wrk_start_date,
            wrk_end_date: req.body.wrk_end_date,
            wrk_description: req.body.wrk_description,
          },
        ],
        skill: [req.body.skill],
        hobbies: [req.body.hobbies],
        language: [
          {
            language_name: req.body.language_name,
            read: req.body.read,
            write: req.body.write,
            speak: req.body.speak,
            level: req.body.level,
          },
        ],
        photo: {
          data: buffer,
          contentType: req.file.mimetype,
        },
      },
    });
    res.send(user.portfolio);
  }
);

router.post(
  "/add/coet",
  upload.single("file"),
  AuthenticateCoet,
  async (req, res) => {
    const final_path = req.file.path;

    const base64 = fs.readFileSync(final_path, "base64");
    const buffer = Buffer.from(base64, "base64");
    console.log(req.body);
    const user = await COET.findByIdAndUpdate(req.userID, {
      portfolio: {
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        phone_number: req.body.phone,
        website: req.body.website,
        email: req.body.email,
        objective: req.body.objective,
        education: [
          {
            institution_name: req.body.institution,
            course: req.body.course,
            grade: req.body.grade,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            edu_description: req.body.edu_description,
          },
        ],
        certification: [
          {
            course_name: req.body.course_name,
            cer_organisation: req.body.cer_organisation,
            cer_description: req.body.cer_description,
          },
        ],
        workexp: [
          {
            wrk_organisation: req.body.wrk_organisation,
            role: req.body.role,
            wrk_start_date: req.body.wrk_start_date,
            wrk_end_date: req.body.wrk_end_date,
            wrk_description: req.body.wrk_description,
          },
        ],
        skill: [req.body.skill],
        hobbies: [req.body.hobbies],
        language: [
          {
            language_name: req.body.language_name,
            read: req.body.read,
            write: req.body.write,
            speak: req.body.speak,
            level: req.body.level,
          },
        ],
        photo: {
          data: buffer,
          contentType: req.file.mimetype,
        },
      },
    });
    res.send(user.portfolio);
  }
);

router.get("/getportfoliodata/off", Authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.userID);
    res.send(user.portfolio);
  } catch (error) {
    res.send(error);
  }
});

router.get("/getportfoliodata/coet", AuthenticateCoet, async (req, res) => {
  try {
    const user = await COET.findById(req.userID);
    res.send(user.portfolio);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
