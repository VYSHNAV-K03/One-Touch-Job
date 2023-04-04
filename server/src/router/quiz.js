const express = require("express");
const router = express.Router();

//import excel data to mongodb
const path = require("path");
const reader = require("xlsx");
const Authenticate = require("../middleware/authenticate");
const AuthenticateCoet = require("../middleware/authenticateCoet");
const COET = require("../models/collegeofengineeringthalassery");
const Excel = require("../models/exceldata");
const User = require("../models/userSchema");

const file = reader.readFile(__dirname + "/Book.xlsx");

router.get("/excel/create", async (req, res) => {
  try {
    const user = new Excel();
    await user.save();
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

const react_id = "621e51d35b111cd562447fb9";

router.get("/excel", async (req, res) => {
  try {
    const sheets = file.SheetNames;

    const data = [];
    // for (let i = 0; i < sheets.length; i++) {
    //   const sheetname = sheets[i];
    //   const sheetData = reader.utils.sheet_to_json(file.Sheets[sheetname]);

    //   sheetData.forEach((a) => {
    //     data.push(a);
    //   });
    // }
    // console.log(req.body);
    req.body.forEach((element) => {
      data.push(element);
    });
    // console.log(data[2]);
    const user = await Excel.findByIdAndUpdate(react_id, {
      name: "React",
      questionset1: data[0],
      questionset2: data[1],
      questionset3: data[2],
    });

    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/react/easy", async (req, res) => {
  try {
    const user = await Excel.findOne({ _id: "621e51d35b111cd562447fb9" });
    const { questionset1, ...others } = user._doc;

    res.send(questionset1);
  } catch (error) {
    res.send(error);
  }
});
router.get("/react/medium", async (req, res) => {
  try {
    const user = await Excel.findOne({ _id: "621e51d35b111cd562447fb9" });
    const { questionset2, ...others } = user._doc;

    res.send(questionset2);
  } catch (error) {
    res.send(error);
  }
});
router.get("/react/hard", async (req, res) => {
  try {
    const user = await Excel.findOne({ _id: "621e51d35b111cd562447fb9" });
    const { questionset3, ...others } = user._doc;

    res.send(questionset3);
  } catch (error) {
    res.send(error);
  }
});

router.post("/coet/quizskillupdate", AuthenticateCoet, async (req, res) => {
  try {
    const data = [];
    const rootuser = req.rootUser;
    console.log(rootuser.skills);
    req.body.forEach((element) => {
      if (rootuser.skills.includes(element)) {
        data.push();
      } else {
        data.push(element);
      }
    });

    const user = await COET.updateOne(
      { _id: req.userID },
      {
        $push: {
          skills: data,
        },
      }
    );
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

router.post("/off/quizskillupdate", Authenticate, async (req, res) => {
  try {
    const data = [];
    const rootuser = req.rootUser;
    console.log(rootuser.skills);
    req.body.forEach((element) => {
      if (rootuser.skills.includes(element)) {
        data.push();
      } else {
        data.push(element);
      }
    });

    const user = await User.updateOne(
      { _id: req.userID },
      {
        $push: {
          skills: data,
        },
      }
    );
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;
