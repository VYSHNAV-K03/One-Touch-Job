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

const FullProURLUploadController = async (req, res, next) => {
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

module.exports = {
  ReactURLUploadController,
  HtmlURLUploadController,
  JsURLUploadController,
  FrontendProURLUploadController,
  NodeURLUploadController,
  MongoURLUploadController,
  ExpressURLUploadController,
  BackendProURLUploadController,
  FullProURLUploadController,
};
