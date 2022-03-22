const express = require("express");
const { upload } = require("../helpers/filehelper");
const { deleteOne } = require("../models/workshopschema");
const Workshop = require("../models/workshopschema");
const router = express.Router();
const fs = require("fs");
const ReactUrl = require("../models2/reactwithurl");
const { ReactURLUpload } = require("../controllers/fileUploadController");

//add react url
router.post("/react/url", upload.single("file"), ReactURLUpload);
router.get("/react/url/get", async (req, res) => {
  try {
    const react = await ReactUrl.find();
    res.send(react);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/react/url/delete/:id", async (req, res) => {
  try {
    const reactFiles = await ReactUrl.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
