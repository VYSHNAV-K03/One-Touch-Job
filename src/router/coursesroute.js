const express = require("express");
const { upload } = require("../helpers/filehelper");
const { deleteOne } = require("../models/workshopschema");
const Workshop = require("../models/workshopschema");
const router = express.Router();
const fs = require("fs");
const ReactUrl = require("../models2/reactwithurl");
const HtmlUrl = require("../models2/htmlurl");
const {
  ReactURLUploadController,
  HtmlURLUploadController,
  JsURLUploadController,
  FrontendProURLUploadController,
  NodeURLUploadController,
  MongoURLUploadController,
  ExpressURLUploadController,
  BackendProURLUploadController,
  FullProURLUploadController,
} = require("../controllers/coursesfileuploadcontroller");
const JsUrl = require("../models2/jsurl");
const FrontProUrl = require("../models2/frontprourl");
const NodeUrl = require("../models2/nodeurl");
const MongoUrl = require("../models2/mongourl");
const ExpressUrl = require("../models2/expressurl");
const BackendUrl = require("../models2/backendprourl");
const MernUrl = require("../models2/mernprourl");

//add react url
router.post("/react/url", upload.single("file"), ReactURLUploadController);
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
//html
router.post("/htmlandcss/url", upload.single("file"), HtmlURLUploadController);
router.get("/htmlandcss/url/get", async (req, res) => {
  try {
    const react = await HtmlUrl.find();
    res.send(react);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/htmlandcss/url/delete/:id", async (req, res) => {
  try {
    const reactFiles = await HtmlUrl.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

//js
router.post("/javascript/url", upload.single("file"), JsURLUploadController);
router.get("/javascript/url/get", async (req, res) => {
  try {
    const react = await JsUrl.find();
    res.send(react);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/javascript/url/delete/:id", async (req, res) => {
  try {
    const reactFiles = await JsUrl.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

//angular
// router.post("/angular/url", upload.single("file"), ReactURLUploadController);
// router.get("/angular/url/get", async (req, res) => {
//   try {
//     const react = await ReactUrl.find();
//     res.send(react);
//   } catch (error) {
//     res.send(error);
//   }
// });
// router.delete("/angular/url/delete/:id", async (req, res) => {
//   try {
//     const reactFiles = await ReactUrl.findByIdAndDelete({ _id: req.params.id });
//     res.status(200).send(reactFiles);
//   } catch (error) {
//     res.send(error);
//   }
// });

//vue
// router.post("/vue/url", upload.single("file"), ReactURLUploadController);
// router.get("/vue/url/get", async (req, res) => {
//   try {
//     const react = await ReactUrl.find();
//     res.send(react);
//   } catch (error) {
//     res.send(error);
//   }
// });
// router.delete("/vue/url/delete/:id", async (req, res) => {
//   try {
//     const reactFiles = await ReactUrl.findByIdAndDelete({ _id: req.params.id });
//     res.status(200).send(reactFiles);
//   } catch (error) {
//     res.send(error);
//   }
// });

//frontendprojects
router.post(
  "/frontendprojects/url",
  upload.single("file"),
  FrontendProURLUploadController
);
router.get("/frontendprojects/url/get", async (req, res) => {
  try {
    const react = await FrontProUrl.find();
    res.send(react);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/frontendprojects/url/delete/:id", async (req, res) => {
  try {
    const reactFiles = await FrontProUrl.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

//node
router.post("/node/url", upload.single("file"), NodeURLUploadController);
router.get("/node/url/get", async (req, res) => {
  try {
    const react = await NodeUrl.find();
    res.send(react);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/node/url/delete/:id", async (req, res) => {
  try {
    const reactFiles = await NodeUrl.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

//mongo
router.post("/mongo/url", upload.single("file"), MongoURLUploadController);
router.get("/mongo/url/get", async (req, res) => {
  try {
    const react = await MongoUrl.find();
    res.send(react);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/mongo/url/delete/:id", async (req, res) => {
  try {
    const reactFiles = await MongoUrl.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

//express
router.post("/express/url", upload.single("file"), ExpressURLUploadController);
router.get("/express/url/get", async (req, res) => {
  try {
    const react = await ExpressUrl.find();
    res.send(react);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/express/url/delete/:id", async (req, res) => {
  try {
    const reactFiles = await ExpressUrl.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

//backendprojects
router.post(
  "/backendprojects/url",
  upload.single("file"),
  BackendProURLUploadController
);
router.get("/backendprojects/url/get", async (req, res) => {
  try {
    const react = await BackendUrl.find();
    res.send(react);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/backendprojects/url/delete/:id", async (req, res) => {
  try {
    const reactFiles = await BackendUrl.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

//fullstackprojects
router.post(
  "/fullstackprojects/url",
  upload.single("file"),
  FullProURLUploadController
);
router.get("/fullstackprojects/url/get", async (req, res) => {
  try {
    const react = await MernUrl.find();
    res.send(react);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/fullstackprojects/url/delete/:id", async (req, res) => {
  try {
    const reactFiles = await MernUrl.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
