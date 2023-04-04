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
  FrontendProAngularURLUploadController,
  FrontendProVueURLUploadController,
  AngularURLUploadController,
  VueURLUploadController,
  MernProURLUploadController,
  MeanProURLUploadController,
  MevnProURLUploadController,
  FlutterURLUploadController,
  ReactnativeURLUploadController,
  UnityURLUploadController,
} = require("../controllers/coursesfileuploadcontroller");
const JsUrl = require("../models2/jsurl");
const FrontProUrl = require("../models2/frontprourl");
const NodeUrl = require("../models2/nodeurl");
const MongoUrl = require("../models2/mongourl");
const ExpressUrl = require("../models2/expressurl");
const BackendUrl = require("../models2/backendprourl");
const MernUrl = require("../models2/mernprourl");
const FrontProVueUrl = require("../models2/frontendprovue");
const FrontProAngularUrl = require("../models2/frontangularurl");
const AngularUrl = require("../models2/angularwithurl");
const VueUrl = require("../models2/vuewithurl");
const MevnUrl = require("../models2/mevnprourl");
const MeanUrl = require("../models2/meanprourl");
const FlutterUrl = require("../models2/flutterurl");
const ReactNativeUrl = require("../models2/reactnativeurl");
const UnityUrl = require("../models2/unityurl");

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

//flutter
router.post(
  "/fluttercourse/url",
  upload.single("file"),
  FlutterURLUploadController
);
router.get("/fluttercourse/url/get", async (req, res) => {
  try {
    const react = await FlutterUrl.find();
    res.send(react);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/fluttercourse/url/delete/:id", async (req, res) => {
  try {
    const reactFiles = await FlutterUrl.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

//reactnative
router.post(
  "/reactnativecourse/url",
  upload.single("file"),
  ReactnativeURLUploadController
);
router.get("/reactnativecourse/url/get", async (req, res) => {
  try {
    const react = await ReactNativeUrl.find();
    res.send(react);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/reactnativecourse/url/delete/:id", async (req, res) => {
  try {
    const reactFiles = await ReactNativeUrl.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

//unity3d
router.post(
  "/unity3dcourse/url",
  upload.single("file"),
  UnityURLUploadController
);
router.get("/unity3dcourse/url/get", async (req, res) => {
  try {
    const react = await UnityUrl.find();
    res.send(react);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/unity3dcourse/url/delete/:id", async (req, res) => {
  try {
    const reactFiles = await UnityUrl.findByIdAndDelete({
      _id: req.params.id,
    });
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

// angular
router.post("/angular/url", upload.single("file"), AngularURLUploadController);
router.get("/angular/url/get", async (req, res) => {
  try {
    const react = await AngularUrl.find();
    res.send(react);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/angular/url/delete/:id", async (req, res) => {
  try {
    const reactFiles = await AngularUrl.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

// vue
router.post("/vue/url", upload.single("file"), VueURLUploadController);
router.get("/vue/url/get", async (req, res) => {
  try {
    const react = await VueUrl.find();
    res.send(react);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/vue/url/delete/:id", async (req, res) => {
  try {
    const reactFiles = await VueUrl.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

//frontendprojectsreact
router.post(
  "/frontendprojectsreact/url",
  upload.single("file"),
  FrontendProURLUploadController
);
router.get("/frontendprojectsreact/url/get", async (req, res) => {
  try {
    const react = await FrontProUrl.find();
    res.send(react);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/frontendprojectsreact/url/delete/:id", async (req, res) => {
  try {
    const reactFiles = await FrontProUrl.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

//frontendprojectsangular

router.post(
  "/frontendprojectsangular/url",
  upload.single("file"),
  FrontendProAngularURLUploadController
);
router.get("/frontendprojectsangular/url/get", async (req, res) => {
  try {
    const react = await FrontProAngularUrl.find();
    res.send(react);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/frontendprojectsangular/url/delete/:id", async (req, res) => {
  try {
    const reactFiles = await FrontProAngularUrl.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

//frontendprojectsvue

router.post(
  "/frontendprojectsvue/url",
  upload.single("file"),
  FrontendProVueURLUploadController
);
router.get("/frontendprojectsvue/url/get", async (req, res) => {
  try {
    const react = await FrontProVueUrl.find();
    res.send(react);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/frontendprojectsvue/url/delete/:id", async (req, res) => {
  try {
    const reactFiles = await FrontProVueUrl.findByIdAndDelete({
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

//fullstackprojectsmern
router.post(
  "/fullstackprojectsmern/url",
  upload.single("file"),
  MernProURLUploadController
);
router.get("/fullstackprojectsmern/url/get", async (req, res) => {
  try {
    const react = await MernUrl.find();
    res.send(react);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/fullstackprojectsmern/url/delete/:id", async (req, res) => {
  try {
    const reactFiles = await MernUrl.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

//fullstackprojectsmean
router.post(
  "/fullstackprojectsmean/url",
  upload.single("file"),
  MeanProURLUploadController
);
router.get("/fullstackprojectsmean/url/get", async (req, res) => {
  try {
    const react = await MeanUrl.find();
    res.send(react);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/fullstackprojectsmean/url/delete/:id", async (req, res) => {
  try {
    const reactFiles = await MeanUrl.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

//fullstackprojectsmevn
router.post(
  "/fullstackprojectsmevn/url",
  upload.single("file"),
  MevnProURLUploadController
);
router.get("/fullstackprojectsmevn/url/get", async (req, res) => {
  try {
    const react = await MevnUrl.find();
    res.send(react);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/fullstackprojectsmevn/url/delete/:id", async (req, res) => {
  try {
    const reactFiles = await MevnUrl.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
