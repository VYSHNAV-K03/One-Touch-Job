// This is used for change the methods from anywhere using the express

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const fs = require("fs");

const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const formidable = require("formidable");

const cookieParser = require("cookie-parser"); //this is used for getting req.cookies in middleware otherwise we dont get cookies in req in middleware

router.use(cookieParser());

require("../db/conn");
require("dotenv").config({
  path: "server/.env",
});

const User = require("../models/userSchema");
const React = require("../models/reactschema");
const Authenticate = require("../middleware/authenticate");

// router.use(Authenticate);

const { upload } = require("../helpers/filehelper");
const {
  singleFileupload,
  getFiles,
  deleteFiles,
  ReactFileUpload,
  NormalFileUpload,
  WordpressFileUpload,
  VueFileUpload,
  AngularFileUpload,
  singleFileuploadCoet,
  HtmlFileUpload,
  JSFileUpload,
  FrontendProjectsUpload,
  NodeFileUpload,
  ExpressFileUpload,
  MongoFileUpload,
  BackendProjectFileUpload,
  FullstackProjectFileUpload,
  placementserviceupload,
  FrontendProjectsAngularUpload,
  FrontendProjectsVueUpload,
  FullstackProjectFileUploadMean,
  FullstackProjectFileUploadMevn,
  placementservicecoetupload,
  placementproductoffupload,
  placementproductcoetupload,
  placementstartupoffupload,
  placementstartupcoetupload,
  placementInternshipoffupload,
  placementInternshipcoetupload,
  ReactURLUpload,
  ProfileUpdate,
  ProfileUpdatecoet,
} = require("../controllers/fileUploadController");
const Vue = require("../models/vueschema");
const Angular = require("../models/angularschema");
const Wordpress = require("../models/wordpressschema");
const Normal = require("../models/normalschema");
const COET = require("../models/collegeofengineeringthalassery");
const AuthenticateCoet = require("../middleware/authenticateCoet");
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
const StartupOff = require("../models/Starupschemaoff");
const StartupCoet = require("../models/StartupCoet");
const InternshipOff = require("../models/Internship");
const InternshipCoet = require("../models/InternshipCoet");
const ReactUrl = require("../models2/reactwithurl");

// console.log(obj);
// const directory_name = "../models";

// const filenames = fs.readdirSync(directory_name);

//registration route
router.post("/registe", upload.single("file"), async (req, res) => {
  const final_path = req.file.path;

  const base64 = fs.readFileSync(final_path, "base64");
  const buffer = Buffer.from(base64, "base64");

  try {
    const { name, email, work, phone, password, cpassword, Role, file } =
      req.body;

    if (
      !name ||
      !email ||
      !work ||
      !phone ||
      !password ||
      !cpassword ||
      !req.file
    ) {
      res.send("pls fill the field properly");
    }
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      res.send({ status: 422, error: "Email is already present" });
    } else if (password === cpassword) {
      const user = new User({
        name,
        email,
        work,
        password,
        phone,
        cpassword,
        Role,
        profile: {
          data: buffer,
          contentType: req.file.mimetype,
        },
      });

      //here is hashing happening

      const userRegister = await user.save();

      // console.log("user register", userRegister);

      if (userRegister) {
        res.send({ status: 200, message: "user registered successfully" });
      } else {
        res.send({ status: 422, error: "Failed to Registered" });
      }
    } else {
      res.send({ status: 422, error: "password must be equal" });
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/registe/coet", async (req, res) => {
  const { name, email, work, phone, password, cpassword, Role } = req.body;
  // console.log(req.body);

  if (!name || !email || !work || !phone || !password || !cpassword) {
    res.status(422).send({ error: "pls fill the field properly" });
  }
  try {
    const userExist = await COET.findOne({ email: email });

    if (userExist) {
      return res.status(422).send({ error: "Email is already present" });
    } else if (password === cpassword) {
      const user = new COET({
        name,
        email,
        work,
        password,
        phone,
        cpassword,
        Role,
      });

      //here is hashing happening

      const userRegister = await user.save();

      // console.log("user register", userRegister);

      if (userRegister) {
        res.status(201).send({ message: "user registered successfully" });
      } else {
        res.status(500).send({ error: "Failed to Registered" });
      }
    } else {
      res.status(422).send({ error: "password must be equal" });
    }
  } catch (e) {
    console.log(e);
  }
});

// login route

router.post("/signin/off", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.send("pls fill properly");
    } else {
      const userExist = await User.findOne({ email: req.body.email });
      if (userExist) {
        const isMatch = await bcrypt.compare(password, userExist.password);
        const token = await userExist.generateAuthToken();
        // console.log("singin token", token);
        res.cookie("jwt", token, {
          sameSite: "strict",
          expires: new Date(Date.now() + 300000000),
          httpOnly: true,
        });
        // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        // res.setHeader("Access-Control-Allow-Credentials", true);
        if (!isMatch) {
          res.send("check password");
        } else {
          res.status(200).send("user login successfully");
        }
      } else {
        res.status(404).send("Invalid Credentials");
        //hacker dont know the problem is email or password
      }
    }
  } catch (e) {
    res.send("error");
    console.log("error", e);
  }
});

router.post("/signin/coet", async (req, res) => {
  const { email, password, college } = req.body;
  try {
    if (!email || !password || !college) {
      res.send("pls fill properly");
    } else {
      const userExist = await COET.findOne({ email: req.body.email });

      if (userExist) {
        const isMatch = await bcrypt.compare(password, userExist.password);

        const token = await userExist.generateAuthToken();

        res.cookie("jwt", token, {
          sameSite: "strict",
          expires: new Date(Date.now() + 300000000),
          httpOnly: true,
        });

        if (!isMatch) {
          res.send("pls check password");
        } else {
          res.status(200).send("user login successfully");
        }
      } else {
        res.status(404).send("Invalid sumesh");
      }
    }
  } catch (e) {
    console.log("error", e);
  }
});

//update profile image
router.post(
  "/profileimage/coet",
  [AuthenticateCoet, upload.single("file")],
  ProfileUpdatecoet
);

router.post(
  "/profileimage/off",
  [Authenticate, upload.single("file")],
  ProfileUpdate
);

//reset pasword

const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.SEND_GRIDAPI,
    },
  })
);

router.post("/reset-password", async (req, res) => {
  try {
    crypto.randomBytes(32, async (err, buffer) => {
      if (err) {
        console.log(err);
      }
      const token = buffer.toString("hex");
      const userExist = await User.findOne({ email: req.body.body.email });

      if (!userExist) {
        res.status(402).send("User not exist with that email");
      }

      userExist.resetToken = token;
      userExist.expireToken = Date.now() + 360000000000;

      const user = await userExist.save();
      if (user) {
        transporter.sendMail({
          from: "vyshnavk891@gmail.com",
          to: user.email,
          subject: "reset password",
          html: `
              <p> Tap the <a href="https://one-touch-job-app.herokuapp.com/reset/${token}">link</a> to reset password </p>
          `,
        });
        res.send("check mail");
      }
      console.log("reset password", user);
    });
  } catch (error) {
    res.send("reset password error", error);
  }
});

// new password

router.post("/new-password", async (req, res) => {
  try {
    const token = req.body.body.token;
    const password = req.body.body.password;

    const user = await User.findOne({
      resetToken: token,
      expireToken: { $gt: Date.now() },
    });
    if (user) {
      await bcrypt.hash(password, 12).then((hashpass) => {
        user.password = password;
        user.resetToken = undefined;
        user.expireToken = undefined;
        user.save().then((updateduser) => {
          res.send("password update success");
          console.log("password update success");
        });
      });
    }
    // console.log("new password user", password);
  } catch (error) {
    res.send("new password error", error);
  }
});

//collegeofthalassery singini

router.get("/about/off", Authenticate, async (req, res) => {
  try {
    // console.log("about");
    res.send(req.rootUser);
  } catch (e) {
    res.send("error", e);
  }
});

router.get("/about/coet", AuthenticateCoet, async (req, res) => {
  try {
    // console.log("about");
    res.send(req.rootUser);
  } catch (e) {
    res.send("error", e);
  }
});

router.get("/", Authenticate, (req, res) => {
  // console.log("home");
  res.send(req.rootUser);
});

//contact off

router.post("/contact/off", Authenticate, async (req, res) => {
  try {
    const { name, phone, message } = req.body.body; //filled data in contact form

    if (!name || !phone || !message) {
      // console.log("error in contact form");
      res.json({ error: "plz filled the contact form" });
    }
    const userContact = await User.findOne({ _id: req.userID }); //thsi is the id of authenticate user

    // console.log(userContact);

    if (userContact) {
      await userContact.addMessages(name, phone, message);
      await userContact.save();

      res.status(201).send({ message: "user Contact successfull" });
    }
  } catch (e) {
    console.log("this is not ok");
  }
});
//contact coet
router.post("/contact/coet", AuthenticateCoet, async (req, res) => {
  try {
    const { name, phone, message } = req.body.body;
    // console.log(userContact);

    const userContact = await COET.findOne({ _id: req.userID });

    if (userContact) {
      await userContact.addMessages(name, phone, message);
      await userContact.save();

      res.status(201).send({ message: "user Contact successfull" });
    }
  } catch (e) {
    console.log("this is not ok");
  }
});

router.get("/logout/off", Authenticate, (req, res) => {
  // console.log("logout");
  res.clearCookie("jwt", { path: "/" }); //path : cookie path
  res.status(200).send("User logout");
});

///logout coet

router.get("/logout/coet", AuthenticateCoet, (req, res) => {
  // console.log("logout");
  res.clearCookie("jwt", { path: "/" }); //path : cookie path
  res.status(200).send("User logout");
});

//for getting data for frontend
router.get("/getData/off", Authenticate, (req, res) => {
  // console.log("get");
  res.send(req.rootUser);
});

///get coet data

router.get("/getData/coet", AuthenticateCoet, async (req, res) => {
  try {
    // const coetuser = await COET.findOne({ _id: "61fd583cb2d91128b21691be" });
    res.send(req.rootUser);
  } catch (error) {
    res.send("coet error", error);
  }
});

//file upload route
router.post(
  "/uploadfiles/off",
  [Authenticate, upload.array("file", 10)],
  singleFileupload
); //single file upload contains the function

router.post(
  "/uploadfiles/coet",
  [AuthenticateCoet, upload.array("file", 10)],
  singleFileuploadCoet
);

//get files
// router.get("/getfiles", Authenticate, getFiles);

// router.delete("/deletefiles/:id", deleteFiles);

//remove single file array
router.patch("/updatefiles/off/:id1/:id2", async (req, res) => {
  try {
    const id1 = req.params.id1;
    const id2 = req.params.id2;
    const user = await User.updateOne(
      {
        _id: id1,
        "files._id": id2,
      },
      { $set: { "files.$.file": [] } }
    );
    res.status(200).send(user);
  } catch (error) {
    // console.log("update files error", error);
    res.status(404).send(error);
  }
});

router.patch("/updatefiles/coet/:id1/:id2", async (req, res) => {
  try {
    const id1 = req.params.id1;
    const id2 = req.params.id2;
    const user = await COET.updateOne(
      {
        _id: id1,
        "files._id": id2,
      },
      { $set: { "files.$.file": [] } }
    );
    res.status(200).send(user);
  } catch (error) {
    // console.log("update files error", error);
    res.status(404).send(error);
  }
});

/////////// COURSES //////////

/////////// For React ////////////////////

//////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////

///////////// For wordpress //////////////////////////////////////

router.post("/wordpress", upload.array("files", 10), WordpressFileUpload);
router.get("/wordpress/files", async (req, res) => {
  try {
    const reactFiles = await Wordpress.find();
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/wordpress/delete/:id", async (req, res) => {
  try {
    const reactFiles = await Wordpress.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

/////////////////////////////////////////////////////////////

///////////// For Normal //////////////////////////////////////

router.post("/normal", upload.array("files", 10), NormalFileUpload);
router.get("/normal/files", async (req, res) => {
  try {
    const reactFiles = await Normal.find();
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/normal/delete/:id", async (req, res) => {
  try {
    const reactFiles = await Normal.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

/////////////////////////////////////////////////////////////

///////////////For htmlandcss //////////////////

router.post("/htmlandcss", upload.array("files", 10), HtmlFileUpload);
router.get("/htmlandcss/files", async (req, res) => {
  try {
    const reactFiles = await Html.find();
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/htmlandcss/delete/:id", async (req, res) => {
  try {
    const reactFiles = await Html.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});
////js
router.post("/javascript", upload.array("files", 10), JSFileUpload);
router.get("/javascript/files", async (req, res) => {
  try {
    const reactFiles = await Js.find();
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/javascript/delete/:id", async (req, res) => {
  try {
    const reactFiles = await Js.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

//react

//add react url
///////////// For Angular //////////////////////////////////////

router.post("/angular", upload.array("files", 10), AngularFileUpload);
router.get("/angular/files", async (req, res) => {
  try {
    const reactFiles = await Angular.find();
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/angular/delete/:id", async (req, res) => {
  try {
    const reactFiles = await Angular.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

///////////// For Vue //////////////////////////////////////

router.post("/vue", upload.array("files", 10), VueFileUpload);
router.get("/vue/files", async (req, res) => {
  try {
    const reactFiles = await Vue.find();
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/vue/delete/:id", async (req, res) => {
  try {
    const reactFiles = await Vue.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

///frontend projects react
router.post(
  "/frontendprojects/react",
  upload.array("files", 10),
  FrontendProjectsUpload
);
router.get("/frontendprojects/react/files", async (req, res) => {
  try {
    const reactFiles = await FrontendProjects.find();
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/frontendprojects/react/delete/:id", async (req, res) => {
  try {
    const reactFiles = await FrontendProjects.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

//frontend projects angular
router.post(
  "/frontendprojects/angular",
  upload.array("files", 10),
  FrontendProjectsAngularUpload
);
router.get("/frontendprojects/angular/files", async (req, res) => {
  try {
    const reactFiles = await FrontendProjectsAngular.find();
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/frontendprojects/angular/delete/:id", async (req, res) => {
  try {
    const reactFiles = await FrontendProjectsAngular.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

///vue projects

router.post(
  "/frontendprojects/vue",
  upload.array("files", 10),
  FrontendProjectsVueUpload
);
router.get("/frontendprojects/vue/files", async (req, res) => {
  try {
    const reactFiles = await FrontendProjectsVue.find();
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/frontendprojects/vue/delete/:id", async (req, res) => {
  try {
    const reactFiles = await FrontendProjectsVue.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

//nodejs
router.post("/node", upload.array("files", 10), NodeFileUpload);
router.get("/node/files", async (req, res) => {
  try {
    const reactFiles = await Node.find();
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/node/delete/:id", async (req, res) => {
  try {
    const reactFiles = await Node.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

//express
router.post("/express", upload.array("files", 10), ExpressFileUpload);
router.get("/express/files", async (req, res) => {
  try {
    const reactFiles = await Express.find();
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/express/delete/:id", async (req, res) => {
  try {
    const reactFiles = await Express.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

//mongodb

router.post("/mongo", upload.array("files", 10), MongoFileUpload);
router.get("/mongo/files", async (req, res) => {
  try {
    const reactFiles = await Mongo.find();
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/mongo/delete/:id", async (req, res) => {
  try {
    const reactFiles = await Mongo.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

///backend projects
router.post(
  "/backendprojects",
  upload.array("files", 10),
  BackendProjectFileUpload
);
router.get("/backendprojects/files", async (req, res) => {
  try {
    const reactFiles = await BackendProjects.find();
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/backendprojects/delete/:id", async (req, res) => {
  try {
    const reactFiles = await BackendProjects.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

///full stack projects mern
router.post(
  "/fullstackprojects/mern",
  upload.array("files", 10),
  FullstackProjectFileUpload
);
router.get("/fullstackprojects/mern/files", async (req, res) => {
  try {
    const reactFiles = await FullstackProjects.find();
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/fullstackprojects/mern/delete/:id", async (req, res) => {
  try {
    const reactFiles = await FullstackProjects.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

///full stack projects mean
router.post(
  "/fullstackprojects/mean",
  upload.array("files", 10),
  FullstackProjectFileUploadMean
);
router.get("/fullstackprojects/mean/files", async (req, res) => {
  try {
    const reactFiles = await FullstackProjectsMean.find();
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/fullstackprojects/mean/delete/:id", async (req, res) => {
  try {
    const reactFiles = await FullstackProjectsMean.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

///full stack projects mevn
router.post(
  "/fullstackprojects/mern",
  upload.array("files", 10),
  FullstackProjectFileUploadMevn
);
router.get("/fullstackprojects/mern/files", async (req, res) => {
  try {
    const reactFiles = await FullstackProjectsMevn.find();
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/fullstackprojects/mern/delete/:id", async (req, res) => {
  try {
    const reactFiles = await FullstackProjectsMevn.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).send(reactFiles);
  } catch (error) {
    res.send(error);
  }
});

//////////////////////////////////////////////////////

///Passion -----

router.patch("/updatepassion/off/:passion", Authenticate, async (req, res) => {
  try {
    const user = await User.updateOne(
      {
        _id: req.userID,
      },
      { $set: { passion: req.params.passion } }
    );
    res.send(user);
  } catch (error) {
    res.status(400).send("passion error", error);
  }
});

router.patch(
  "/updatepassion/coet/:passion",
  AuthenticateCoet,
  async (req, res) => {
    try {
      const user = await COET.updateOne(
        {
          _id: req.userID,
        },
        { $set: { passion: req.params.passion } }
      );
      res.send(user);
    } catch (error) {
      res.status(400).send("passion error", error);
    }
  }
);

//placement off campus//////////////////////
router.post(
  "/placement/service/off",
  upload.single("file"),
  placementserviceupload
);
router.get("/placement/service/off", async (req, res) => {
  try {
    const servicebasedplacement = await ServiceBased.find();
    res.send(servicebasedplacement);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/placement/service/off/:id", async (req, res) => {
  try {
    await ServiceBased.findByIdAndDelete({ _id: req.params.id });
  } catch (error) {
    res.send(error);
  }
});

//placement coet//////////////////////
router.post(
  "/placement/service/coet",
  upload.single("file"),
  placementservicecoetupload
);
router.get("/placement/service/coet", async (req, res) => {
  try {
    const servicebasedplacement = await ServiceBasedCoet.find();
    res.send(servicebasedplacement);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/placement/service/coet/:id", async (req, res) => {
  try {
    await ServiceBasedCoet.findByIdAndDelete({ _id: req.params.id });
  } catch (error) {
    res.send(error);
  }
});

//placement Product off campus//////////////////////
router.post(
  "/placement/product/off",
  upload.single("file"),
  placementproductoffupload
);
router.get("/placement/product/off", async (req, res) => {
  try {
    const servicebasedplacement = await ProductBasedOff.find();
    res.send(servicebasedplacement);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/placement/product/off/:id", async (req, res) => {
  try {
    await ProductBasedOff.findByIdAndDelete({ _id: req.params.id });
  } catch (error) {
    res.send(error);
  }
});

//placement Product coet//////////////////////
router.post(
  "/placement/product/coet",
  upload.single("file"),
  placementproductcoetupload
);
router.get("/placement/product/coet", async (req, res) => {
  try {
    const servicebasedplacement = await ProductBasedCoet.find();
    res.send(servicebasedplacement);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/placement/product/coet/:id", async (req, res) => {
  try {
    await ProductBasedCoet.findByIdAndDelete({ _id: req.params.id });
  } catch (error) {
    res.send(error);
  }
});

//placement Startup off campus//////////////////////
router.post(
  "/placement/startup/off",
  upload.single("file"),
  placementstartupoffupload
);
router.get("/placement/startup/off", async (req, res) => {
  try {
    const servicebasedplacement = await StartupOff.find();
    res.send(servicebasedplacement);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/placement/startup/off/:id", async (req, res) => {
  try {
    await StartupOff.findByIdAndDelete({ _id: req.params.id });
  } catch (error) {
    res.send(error);
  }
});

//placement Startup coet//////////////////////
router.post(
  "/placement/startup/coet",
  upload.single("file"),
  placementstartupcoetupload
);
router.get("/placement/startup/coet", async (req, res) => {
  try {
    const servicebasedplacement = await StartupCoet.find();
    res.send(servicebasedplacement);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/placement/startup/coet/:id", async (req, res) => {
  try {
    await StartupCoet.findByIdAndDelete({ _id: req.params.id });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
