const express = require("express");
const { upload } = require("../helpers/filehelper");
const { deleteOne } = require("../models/workshopschema");
const Workshop = require("../models/workshopschema");
const router = express.Router();
const fs = require("fs");
const PlacedCoet = require("../models2/PlacedCoetSchema");
const PlacedOff = require("../models2/PlacedOffSchema");

router.post(
  "/addplacedstudent/coet",
  upload.fields([
    {
      name: "profile",
      maxCount: 1,
    },
    {
      name: "poster",
      maxCount: 1,
    },
  ]),
  async (req, res) => {
    const final_path_file1 = req.files.profile[0].path;
    const base64_file1 = fs.readFileSync(final_path_file1, "base64");
    const buffer_file1 = Buffer.from(base64_file1, "base64");

    const final_path_file2 = req.files.poster[0].path;
    const base64_file2 = fs.readFileSync(final_path_file2, "base64");
    const buffer_file2 = Buffer.from(base64_file2, "base64");

    try {
      const placedcoet = new PlacedCoet({
        name: req.body.name,
        companyname: req.body.companyname,
        companytype: req.body.companytype,
        salary: req.body.salary,
        dept: req.body.dept,
        profile: {
          data: buffer_file1,
          contentType: req.files.profile[0].mimetype,
        },
        poster: {
          data: buffer_file2,
          contentType: req.files.poster[0].mimetype,
        },
      });

      // res.send(req.body);

      await placedcoet.save();

      res.send(placedcoet);
    } catch (error) {
      console.log(error);
    }
  }
);

router.post(
  "/addplacedstudent/off",
  upload.fields([
    {
      name: "profile",
      maxCount: 1,
    },
    {
      name: "poster",
      maxCount: 1,
    },
  ]),
  async (req, res) => {
    const final_path_file1 = req.files.profile[0].path;
    const base64_file1 = fs.readFileSync(final_path_file1, "base64");
    const buffer_file1 = Buffer.from(base64_file1, "base64");

    const final_path_file2 = req.files.poster[0].path;
    const base64_file2 = fs.readFileSync(final_path_file2, "base64");
    const buffer_file2 = Buffer.from(base64_file2, "base64");

    try {
      const placedcoet = new PlacedOff({
        name: req.body.name,
        companyname: req.body.companyname,
        companytype: req.body.companytype,
        salary: req.body.salary,
        dept: req.body.dept,
        profile: {
          data: buffer_file1,
          contentType: req.files.profile[0].mimetype,
        },
        poster: {
          data: buffer_file2,
          contentType: req.files.poster[0].mimetype,
        },
      });

      // res.send(req.body);

      await placedcoet.save();

      res.send(placedcoet);
    } catch (error) {
      console.log(error);
    }
  }
);

router.get("/getplaced/coet", async (req, res) => {
  const placedcoet = await PlacedCoet.find();
  res.send(placedcoet);
});

router.get("/getplaced/off", async (req, res) => {
  const placedcoet = await PlacedOff.find();
  res.send(placedcoet);
});

router.delete("/delete/coet/:id", async (req, res) => {
  try {
    const deleted = await PlacedCoet.deleteOne({ _id: req.params.id });
    res.send(deleted);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete/off/:id", async (req, res) => {
  try {
    const deleted = await PlacedOff.deleteOne({ _id: req.params.id });
    res.send(deleted);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
