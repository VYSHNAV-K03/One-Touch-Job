const fs = require("fs");
const FrontProUrl = require("../models2/frontprourl");
const HtmlUrl = require("../models2/htmlurl");
const JsUrl = require("../models2/jsurl");
const NodeUrl = require("../models2/nodeurl");

const ReactUrl = require("../models2/reactwithurl");
const MongoUrl = require("../models2/mongourl");
const ExpressUrl = require("../models2/expressurl");
const BackendUrl = require("../models2/backendprourl");
const MernUrl = require("../models2/mernprourl");
const FrontProAngularUrl = require("../models2/frontangularurl");
const FrontProVueUrl = require("../models2/frontendprovue");
const AngularUrl = require("../models2/angularwithurl");
const VueUrl = require("../models2/vuewithurl");
const MevnUrl = require("../models2/mevnprourl");
const MeanUrl = require("../models2/meanprourl");

const ReactURLUploadController = async (req, res, next) => {
  const final_path = req.file.path;

  const base64 = fs.readFileSync(final_path, "base64");
  const buffer = Buffer.from(base64, "base64");
  try {
    const multipleFiles = new ReactUrl({
      url: req.body.url,
      image: {
        data: buffer,
        contentType: req.file.mimetype,
      },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const AngularURLUploadController = async (req, res, next) => {
  const final_path = req.file.path;

  const base64 = fs.readFileSync(final_path, "base64");
  const buffer = Buffer.from(base64, "base64");
  try {
    const multipleFiles = new AngularUrl({
      url: req.body.url,
      image: {
        data: buffer,
        contentType: req.file.mimetype,
      },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const VueURLUploadController = async (req, res, next) => {
  const final_path = req.file.path;

  const base64 = fs.readFileSync(final_path, "base64");
  const buffer = Buffer.from(base64, "base64");
  try {
    const multipleFiles = new VueUrl({
      url: req.body.url,
      image: {
        data: buffer,
        contentType: req.file.mimetype,
      },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const HtmlURLUploadController = async (req, res, next) => {
  const final_path = req.file.path;

  const base64 = fs.readFileSync(final_path, "base64");
  const buffer = Buffer.from(base64, "base64");
  try {
    const multipleFiles = new HtmlUrl({
      url: req.body.url,
      image: {
        data: buffer,
        contentType: req.file.mimetype,
      },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const JsURLUploadController = async (req, res, next) => {
  const final_path = req.file.path;

  const base64 = fs.readFileSync(final_path, "base64");
  const buffer = Buffer.from(base64, "base64");
  try {
    const multipleFiles = new JsUrl({
      url: req.body.url,
      image: {
        data: buffer,
        contentType: req.file.mimetype,
      },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const FrontendProURLUploadController = async (req, res, next) => {
  const final_path = req.file.path;

  const base64 = fs.readFileSync(final_path, "base64");
  const buffer = Buffer.from(base64, "base64");
  try {
    const multipleFiles = new FrontProUrl({
      url: req.body.url,
      image: {
        data: buffer,
        contentType: req.file.mimetype,
      },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const FrontendProAngularURLUploadController = async (req, res, next) => {
  const final_path = req.file.path;

  const base64 = fs.readFileSync(final_path, "base64");
  const buffer = Buffer.from(base64, "base64");
  try {
    const multipleFiles = new FrontProAngularUrl({
      url: req.body.url,
      image: {
        data: buffer,
        contentType: req.file.mimetype,
      },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const FrontendProVueURLUploadController = async (req, res, next) => {
  const final_path = req.file.path;

  const base64 = fs.readFileSync(final_path, "base64");
  const buffer = Buffer.from(base64, "base64");
  try {
    const multipleFiles = new FrontProVueUrl({
      url: req.body.url,
      image: {
        data: buffer,
        contentType: req.file.mimetype,
      },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const NodeURLUploadController = async (req, res, next) => {
  const final_path = req.file.path;

  const base64 = fs.readFileSync(final_path, "base64");
  const buffer = Buffer.from(base64, "base64");
  try {
    const multipleFiles = new NodeUrl({
      url: req.body.url,
      image: {
        data: buffer,
        contentType: req.file.mimetype,
      },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};
const MongoURLUploadController = async (req, res, next) => {
  const final_path = req.file.path;

  const base64 = fs.readFileSync(final_path, "base64");
  const buffer = Buffer.from(base64, "base64");
  try {
    const multipleFiles = new MongoUrl({
      url: req.body.url,
      image: {
        data: buffer,
        contentType: req.file.mimetype,
      },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const ExpressURLUploadController = async (req, res, next) => {
  const final_path = req.file.path;

  const base64 = fs.readFileSync(final_path, "base64");
  const buffer = Buffer.from(base64, "base64");
  try {
    const multipleFiles = new ExpressUrl({
      url: req.body.url,
      image: {
        data: buffer,
        contentType: req.file.mimetype,
      },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const BackendProURLUploadController = async (req, res, next) => {
  const final_path = req.file.path;

  const base64 = fs.readFileSync(final_path, "base64");
  const buffer = Buffer.from(base64, "base64");
  try {
    const multipleFiles = new BackendUrl({
      url: req.body.url,
      image: {
        data: buffer,
        contentType: req.file.mimetype,
      },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const MernProURLUploadController = async (req, res, next) => {
  const final_path = req.file.path;

  const base64 = fs.readFileSync(final_path, "base64");
  const buffer = Buffer.from(base64, "base64");
  try {
    const multipleFiles = new MernUrl({
      url: req.body.url,
      image: {
        data: buffer,
        contentType: req.file.mimetype,
      },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const MeanProURLUploadController = async (req, res, next) => {
  const final_path = req.file.path;

  const base64 = fs.readFileSync(final_path, "base64");
  const buffer = Buffer.from(base64, "base64");
  try {
    const multipleFiles = new MeanUrl({
      url: req.body.url,
      image: {
        data: buffer,
        contentType: req.file.mimetype,
      },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};
const MevnProURLUploadController = async (req, res, next) => {
  const final_path = req.file.path;

  const base64 = fs.readFileSync(final_path, "base64");
  const buffer = Buffer.from(base64, "base64");
  try {
    const multipleFiles = new MevnUrl({
      url: req.body.url,
      image: {
        data: buffer,
        contentType: req.file.mimetype,
      },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  ReactURLUploadController,
  HtmlURLUploadController,
  JsURLUploadController,
  FrontendProURLUploadController,
  NodeURLUploadController,
  MongoURLUploadController,
  ExpressURLUploadController,
  BackendProURLUploadController,
  MernProURLUploadController,
  FrontendProAngularURLUploadController,
  FrontendProVueURLUploadController,
  AngularURLUploadController,
  VueURLUploadController,
  MeanProURLUploadController,
  MevnProURLUploadController,
};
