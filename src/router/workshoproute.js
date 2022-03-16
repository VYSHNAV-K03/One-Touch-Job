const express = require("express");
const { upload } = require("../helpers/filehelper");
const { deleteOne } = require("../models/workshopschema");
const Workshop = require("../models/workshopschema");
const router = express.Router();
const fs = require("fs");

router.post("/addworkshop", upload.single("file"), async (req, res) => {
  const final_path = req.file.path;
  const base64 = fs.readFileSync(final_path, "base64");
  const buffer = Buffer.from(base64, "base64");

  try {
    const workshop = new Workshop({
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
      filepath: {
        data: buffer,
        contentType: req.file.mimetype,
      },
    });

    // res.send(req.body);

    await workshop.save();

    res.send(workshop);
  } catch (error) {
    console.log(error);
  }
});

router.get("/getworkshop", async (req, res) => {
  const workshop = await Workshop.find();
  res.send(workshop);
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const deleted = await Workshop.deleteOne({ _id: req.params.id });
    res.send(deleted);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
