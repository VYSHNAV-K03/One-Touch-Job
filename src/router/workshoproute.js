const express = require("express");
const { upload } = require("../helpers/filehelper");
const { deleteOne } = require("../models/workshopschema");
const Workshop = require("../models/workshopschema");
const router = express.Router();

router.post("/addworkshop", upload.single("file"), async (req, res) => {
  try {
    const workshop = new Workshop({
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
      filepath: req.file.path,
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
