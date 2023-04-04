const express = require("express");
const { upload } = require("../helpers/filehelper");
const { deleteOne } = require("../models/workshopschema");
const Workshop = require("../models/workshopschema");
const router = express.Router();
const fs = require("fs");
const Internship = require("../models/Internship");

router.post("/addinternship", upload.single("file"), async (req, res) => {
  const final_path = req.file.path;
  const base64 = fs.readFileSync(final_path, "base64");
  const buffer = Buffer.from(base64, "base64");

  try {
    const internship = new Internship({
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
      type: req.body.type,
      domain: req.body.domain,
      filepath: {
        data: buffer,
        contentType: req.file.mimetype,
      },
    });

    // res.send(req.body);

    await internship.save();

    res.send(internship);
  } catch (error) {
    console.log(error);
  }
});

router.get("/getinternship/notpaid", async (req, res) => {
  const internship = await Internship.find({ type: "not paid" });
  res.send(internship);
});

router.get("/getinternship/paid", async (req, res) => {
  const internship = await Internship.find({ type: "paid" });
  res.send(internship);
});

router.get("/getinternship", async (req, res) => {
  const internship = await Internship.find();
  res.send(internship);
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const deleted = await Internship.deleteOne({ _id: req.params.id });
    res.send(deleted);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
