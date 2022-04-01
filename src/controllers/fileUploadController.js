//this is not single file it is multiple files
const SingleFile = require("../models/singlefile");
const crypto = require("crypto");
const cookieParser = require("cookie-parser"); //this is used for getting req.cookies in middleware otherwise we dont get cookies in req in middleware
const fs = require("fs");

const User = require("../models/userSchema");
const React = require("../models/reactschema");
const Angular = require("../models/angularschema");
const Vue = require("../models/vueschema");
const Wordpress = require("../models/wordpressschema");
const Normal = require("../models/normalschema");
const COET = require("../models/collegeofengineeringthalassery");
const Html = require("../models/htmlandcss");
const Js = require("../models/javascript");
const FrontendProjects = require("../models/FrontendProjects");
const Node = require("../models/Node");
const Express = require("../models/Express");
const Mongo = require("../models/Mongo");
const BackendProjects = require("../models/BackendProjectSchema");
const FullstackProjects = require("../models/FullstackProjectSchema");
const ServiceBased = require("../models/servicebasedplacement");
const FrontendProjectsAngular = require("../models/fontendangularprojectsschema");
const FrontendProjectsVue = require("../models/VueProjectsSchema");
const FullstackProjectsMean = require("../models/FullstackProjectSchemaMean");
const FullstackProjectsMevn = require("../models/FullstackProjectsMevn");
const ServiceBasedCoet = require("../models/ServiceBasedCoet");
const ProductBasedOff = require("../models/ProductBasedOff");
const ProductBasedCoet = require("../models/ProductBasedCoet");
const StartupCoet = require("../models/StartupCoet");
const StartupOff = require("../models/Starupschemaoff");
const InternshipOff = require("../models/Internship");
const InternshipCoet = require("../models/InternshipCoet");
const ReactUrl = require("../models2/reactwithurl");

const singleFileupload = async (req, res, next) => {
  try {
    let filesArray = [];
    console.log("singlefile", req.cookies);
    req.files.forEach((element) => {
      //req.files is the database we want to upload

      const files = {
        filename: element.originalname,
        filetype: element.mimetype,
        filesize: fileSizeFormatter(element.size, 2),
        filepath: element.path,
      };
      filesArray.push(files);
    });

    // console.log("auth done", req.userID);
    const userContact = await User.findOne({ _id: req.userID });
    if (userContact) {
      const id = generateUniqueID();

      await userContact.addFiles(filesArray, id);
      await userContact.save();

      // res.status(201).send({ message: "Files added  successfull" });
    }
    // const multipleFiles = new SingleFile({
    //   files: filesArray,
    // });
    // await multipleFiles.save();
    res.status(201).send(userContact);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

////profile update

const ProfileUpdate = async (req, res, next) => {
  const final_path = req.file.path;

  const base64 = fs.readFileSync(final_path, "base64");
  const buffer = Buffer.from(base64, "base64");
  console.log(req.body);
  try {
    const usercoet = await User.findByIdAndUpdate(req.userID, {
      name: req.body.name,
      work: req.body.work,
      profile: { data: buffer, contentType: req.file.mimetype },
    });
    res.status(200).send("update successfully");
    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const ProfileUpdatecoet = async (req, res, next) => {
  const final_path = req.file.path;

  const base64 = fs.readFileSync(final_path, "base64");
  const buffer = Buffer.from(base64, "base64");
  try {
    const usercoet = await COET.findByIdAndUpdate(req.userID, {
      name: req.body.name,
      work: req.body.profession,
      profile: { data: buffer, contentType: req.file.mimetype },
    });
    res.status(200).send("update successfully");
    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const singleFileuploadCoet = async (req, res, next) => {
  try {
    let filesArray = [];
    console.log("singlefile", req.cookies);
    req.files.forEach((element) => {
      //req.files is the database we want to upload

      const files = {
        filename: element.originalname,
        filetype: element.mimetype,
        filesize: fileSizeFormatter(element.size, 2),
        filepath: element.path,
      };
      filesArray.push(files);
    });

    // console.log("auth done", req.userID);
    const userContact = await COET.findOne({ _id: req.userID });
    if (userContact) {
      const id = generateUniqueID();

      await userContact.addFiles(filesArray, id);
      await userContact.save();

      // res.status(201).send({ message: "Files added  successfull" });
    }
    // const multipleFiles = new SingleFile({
    //   files: filesArray,
    // });
    // await multipleFiles.save();
    res.status(201).send(userContact);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

////////////// React file upload //////////

const ReactFileUpload = async (req, res, next) => {
  // const final_path = req.files.path;

  // const base64 = fs.readFileSync(final_path, "base64");
  // const buffer = Buffer.from(base64, "base64");
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      const files = {
        filename: element.originalname,
        filetype: element.mimetype,
        filesize: fileSizeFormatter(element.size, 2),
        filepath: element.path,
      };
      filesArray.push(files);
    });

    // const reactUser = new React({ filesArray });
    // await reactUser.save();
    // console.log(userContact);

    // if (userContact) {
    //   const id = generateUniqueID();

    //   await userContact.addFiles(filesArray, id);
    //   await userContact.save();

    //   // res.status(201).send({ message: "Files added  successfull" });
    // }
    const multipleFiles = new React({
      videos: filesArray,
    });
    await multipleFiles.save();
    const files = req.files;
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};
///react url with image upload

//// Angular////////////
const AngularFileUpload = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      //req.files is the database we want to upload

      const files = {
        filename: element.originalname,
        filetype: element.mimetype,
        filesize: fileSizeFormatter(element.size, 2),
        filepath: element.path,
      };
      filesArray.push(files);
    });

    const multipleFiles = new Angular({
      videos: filesArray,
    });
    await multipleFiles.save();
    const files = req.files;
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

////// Vue //////////////////
const VueFileUpload = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      //req.files is the database we want to upload

      const files = {
        filename: element.originalname,
        filetype: element.mimetype,
        filesize: fileSizeFormatter(element.size, 2),
        filepath: element.path,
      };
      filesArray.push(files);
    });

    const multipleFiles = new Vue({
      videos: filesArray,
    });
    await multipleFiles.save();
    const files = req.files;
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

///// Wordpress//////////////

const WordpressFileUpload = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      //req.files is the database we want to upload

      const files = {
        filename: element.originalname,
        filetype: element.mimetype,
        filesize: fileSizeFormatter(element.size, 2),
        filepath: element.path,
      };
      filesArray.push(files);
    });

    const multipleFiles = new Wordpress({
      videos: filesArray,
    });
    await multipleFiles.save();
    const files = req.files;
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

////// Normal  ////////////
const NormalFileUpload = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      //req.files is the database we want to upload

      const files = {
        filename: element.originalname,
        filetype: element.mimetype,
        filesize: fileSizeFormatter(element.size, 2),
        filepath: element.path,
      };
      filesArray.push(files);
    });

    const multipleFiles = new Normal({
      videos: filesArray,
    });
    await multipleFiles.save();
    const files = req.files;
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const HtmlFileUpload = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      //req.files is the database we want to upload

      const files = {
        filename: element.originalname,
        filetype: element.mimetype,
        filesize: fileSizeFormatter(element.size, 2),
        filepath: element.path,
      };
      filesArray.push(files);
    });

    const multipleFiles = new Html({
      videos: filesArray,
    });
    await multipleFiles.save();
    const files = req.files;
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const JSFileUpload = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      //req.files is the database we want to upload

      const files = {
        filename: element.originalname,
        filetype: element.mimetype,
        filesize: fileSizeFormatter(element.size, 2),
        filepath: element.path,
      };
      filesArray.push(files);
    });

    const multipleFiles = new Js({
      videos: filesArray,
    });
    await multipleFiles.save();
    const files = req.files;
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const FrontendProjectsUpload = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      //req.files is the database we want to upload

      const files = {
        filename: element.originalname,
        filetype: element.mimetype,
        filesize: fileSizeFormatter(element.size, 2),
        filepath: element.path,
      };
      filesArray.push(files);
    });

    const multipleFiles = new FrontendProjects({
      videos: filesArray,
    });
    await multipleFiles.save();
    const files = req.files;
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const FrontendProjectsAngularUpload = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      //req.files is the database we want to upload

      const files = {
        filename: element.originalname,
        filetype: element.mimetype,
        filesize: fileSizeFormatter(element.size, 2),
        filepath: element.path,
      };
      filesArray.push(files);
    });

    const multipleFiles = new FrontendProjectsAngular({
      videos: filesArray,
    });
    await multipleFiles.save();
    const files = req.files;
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const FrontendProjectsVueUpload = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      //req.files is the database we want to upload

      const files = {
        filename: element.originalname,
        filetype: element.mimetype,
        filesize: fileSizeFormatter(element.size, 2),
        filepath: element.path,
      };
      filesArray.push(files);
    });

    const multipleFiles = new FrontendProjectsVue({
      videos: filesArray,
    });
    await multipleFiles.save();
    const files = req.files;
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const NodeFileUpload = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      //req.files is the database we want to upload

      const files = {
        filename: element.originalname,
        filetype: element.mimetype,
        filesize: fileSizeFormatter(element.size, 2),
        filepath: element.path,
      };
      filesArray.push(files);
    });

    const multipleFiles = new Node({
      videos: filesArray,
    });
    await multipleFiles.save();
    const files = req.files;
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const ExpressFileUpload = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      //req.files is the database we want to upload

      const files = {
        filename: element.originalname,
        filetype: element.mimetype,
        filesize: fileSizeFormatter(element.size, 2),
        filepath: element.path,
      };
      filesArray.push(files);
    });

    const multipleFiles = new Express({
      videos: filesArray,
    });
    await multipleFiles.save();
    const files = req.files;
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const MongoFileUpload = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      //req.files is the database we want to upload

      const files = {
        filename: element.originalname,
        filetype: element.mimetype,
        filesize: fileSizeFormatter(element.size, 2),
        filepath: element.path,
      };
      filesArray.push(files);
    });

    const multipleFiles = new Mongo({
      videos: filesArray,
    });
    await multipleFiles.save();
    const files = req.files;
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const BackendProjectFileUpload = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      //req.files is the database we want to upload

      const files = {
        filename: element.originalname,
        filetype: element.mimetype,
        filesize: fileSizeFormatter(element.size, 2),
        filepath: element.path,
      };
      filesArray.push(files);
    });

    const multipleFiles = new BackendProjects({
      videos: filesArray,
    });
    await multipleFiles.save();
    const files = req.files;
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const FullstackProjectFileUpload = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      //req.files is the database we want to upload

      const files = {
        filename: element.originalname,
        filetype: element.mimetype,
        filesize: fileSizeFormatter(element.size, 2),
        filepath: element.path,
      };
      filesArray.push(files);
    });

    const multipleFiles = new FullstackProjects({
      videos: filesArray,
    });
    await multipleFiles.save();
    const files = req.files;
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const FullstackProjectFileUploadMean = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      //req.files is the database we want to upload

      const files = {
        filename: element.originalname,
        filetype: element.mimetype,
        filesize: fileSizeFormatter(element.size, 2),
        filepath: element.path,
      };
      filesArray.push(files);
    });

    const multipleFiles = new FullstackProjectsMean({
      videos: filesArray,
    });
    await multipleFiles.save();
    const files = req.files;
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const FullstackProjectFileUploadMevn = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      //req.files is the database we want to upload

      const files = {
        filename: element.originalname,
        filetype: element.mimetype,
        filesize: fileSizeFormatter(element.size, 2),
        filepath: element.path,
      };
      filesArray.push(files);
    });

    const multipleFiles = new FullstackProjectsMevn({
      videos: filesArray,
    });
    await multipleFiles.save();
    const files = req.files;
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const placementserviceupload = async (req, res, next) => {
  const final_path = req.file.path;

  const base64 = fs.readFileSync(final_path, "base64");
  const buffer = Buffer.from(base64, "base64");
  try {
    // const files = {
    //   filepath: req.file.path,
    // };

    const multipleFiles = new ServiceBased({
      name: req.body.name,
      salary: req.body.salary,
      url: req.body.url,
      photo: { data: buffer, contentType: req.file.mimetype },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const placementservicecoetupload = async (req, res, next) => {
  try {
    const final_path = req.file.path;

    const base64 = fs.readFileSync(final_path, "base64");
    const buffer = Buffer.from(base64, "base64");

    const multipleFiles = new ServiceBasedCoet({
      name: req.body.name,
      salary: req.body.salary,
      url: req.body.url,
      photo: { data: buffer, contentType: req.file.mimetype },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const placementproductoffupload = async (req, res, next) => {
  try {
    const final_path = req.file.path;

    const base64 = fs.readFileSync(final_path, "base64");
    const buffer = Buffer.from(base64, "base64");

    const multipleFiles = new ProductBasedOff({
      name: req.body.name,
      salary: req.body.salary,
      url: req.body.url,
      photo: { data: buffer, contentType: req.file.mimetype },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const placementproductcoetupload = async (req, res, next) => {
  try {
    const final_path = req.file.path;

    const base64 = fs.readFileSync(final_path, "base64");
    const buffer = Buffer.from(base64, "base64");

    const multipleFiles = new ProductBasedCoet({
      name: req.body.name,
      salary: req.body.salary,
      url: req.body.url,
      photo: { data: buffer, contentType: req.file.mimetype },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const placementstartupoffupload = async (req, res, next) => {
  try {
    const final_path = req.file.path;

    const base64 = fs.readFileSync(final_path, "base64");
    const buffer = Buffer.from(base64, "base64");
    const multipleFiles = new StartupOff({
      name: req.body.name,
      salary: req.body.salary,
      url: req.body.url,
      photo: { data: buffer, contentType: req.file.mimetype },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const placementstartupcoetupload = async (req, res, next) => {
  try {
    const final_path = req.file.path;

    const base64 = fs.readFileSync(final_path, "base64");
    const buffer = Buffer.from(base64, "base64");

    const multipleFiles = new StartupCoet({
      name: req.body.name,
      salary: req.body.salary,
      url: req.body.url,
      photo: { data: buffer, contentType: req.file.mimetype },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const placementInternshipoffupload = async (req, res, next) => {
  try {
    const final_path = req.file.path;

    const base64 = fs.readFileSync(final_path, "base64");
    const buffer = Buffer.from(base64, "base64");

    const multipleFiles = new InternshipOff({
      name: req.body.name,
      salary: req.body.salary,
      url: req.body.url,
      photo: { data: buffer, contentType: req.file.mimetype },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const placementInternshipcoetupload = async (req, res, next) => {
  try {
    const final_path = req.file.path;

    const base64 = fs.readFileSync(final_path, "base64");
    const buffer = Buffer.from(base64, "base64");

    const multipleFiles = new InternshipCoet({
      name: req.body.name,
      salary: req.body.salary,
      url: req.body.url,
      photo: { data: buffer, contentType: req.file.mimetype },
    });
    await multipleFiles.save();
    res.status(201).send(multipleFiles);

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//////////////////////////////////////

//function to generate unique ids
function generateUniqueID() {
  return crypto.randomBytes(8).toString("hex");
}

// get files
const getFiles = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.userID });
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send("get error");
  }
};

const deleteFiles = async (req, res, next) => {
  const _id = req.params.id;
  try {
    const student = await User.findByIdAndDelete(_id);
    if (!student) {
      return res.sendStatus(404);
    }
    return res.send(student);
  } catch (error) {
    return res.send("idk", err);
  }
};

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 bytes";
  }
  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "GB", "MB", "TB", "YB", "PB", "EB", "ZB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
  );
};

//react file upload

module.exports = {
  singleFileupload,
  singleFileuploadCoet,
  getFiles,
  deleteFiles,
  ReactFileUpload,
  AngularFileUpload,
  VueFileUpload,
  WordpressFileUpload,
  NormalFileUpload,
  HtmlFileUpload,
  JSFileUpload,
  FrontendProjectsUpload,
  FrontendProjectsAngularUpload,
  FrontendProjectsVueUpload,
  NodeFileUpload,
  ExpressFileUpload,
  MongoFileUpload,
  BackendProjectFileUpload,
  FullstackProjectFileUpload,
  FullstackProjectFileUploadMean,
  FullstackProjectFileUploadMevn,
  placementserviceupload,
  placementservicecoetupload,
  placementproductoffupload,
  placementproductcoetupload,
  placementstartupcoetupload,
  placementstartupoffupload,
  placementInternshipoffupload,
  placementInternshipcoetupload,
  ProfileUpdate,
  ProfileUpdatecoet,
};
//it is used as a middleware
