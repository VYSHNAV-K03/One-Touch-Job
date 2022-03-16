// Modules
const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
var multer = require("multer");
const { Schema } = mongoose;
const fs = require("fs");
const path = require("path");
const { Certificate } = require("crypto");

//file storage
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
var upload = multer({ storage: storage });

//connection to database
mongoose.connect("mongodb://localhost:27017/myapp");
const port = 8001;
const app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static("public"));

//Schemas

var userschema = new Schema({
  photo: { data: Buffer, contentType: String },
  first_name: String,
  last_name: String,
  address: String,
  city: String,
  state: String,
  phone_number: String,
  website: String,
  email: String,
  objective: String,
  education: [
    {
      institution_name: String,
      course: String,
      grade: String,
      start_date: Date,
      end_date: Date,
      edu_description: String,
    },
  ],
  certification: [
    {
      course_name: String,
      cer_organisation: String,
      cer_description: String,
    },
  ],
  workexp: [
    {
      wrk_organisation: String,
      role: String,
      wrk_start_date: Date,
      wrk_end_date: Date,
      wrk_description: String,
    },
  ],
  skill: [String],
  hobbies: [String],
  language: [
    {
      language_name: String,
      read: { type: Boolean, default: false },
      write: { type: Boolean, default: false },
      speak: { type: Boolean, default: false },
      level: String,
    },
  ],
});

var usermodel = mongoose.model("usermodel", userschema);

//Routes
app.get("/", (req, res) => {
  usermodel.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred", err);
    } else {
      res.sendFile("B:\\node\\resume.html", { items: items });
    }
  });
});

//save to Database

app.post("/add", upload.single("image"), (req, res) => {
  var user = new usermodel();
  var final_path = path.join(__dirname + "/uploads/" + req.file.filename);
  console.log(final_path);
  var base64 = fs.readFileSync(final_path, "base64");
  var buffer = Buffer.from(base64, "base64");
  user.photo.data = buffer;
  user.photo.contentType = req.file.mimetype;
  user.first_name = req.body.first_name;
  user.last_name = req.body.last_name;
  user.address = req.body.address;
  user.city = req.body.city;
  user.state = req.body.state;
  user.phone_number = req.body.phone_number;
  user.website = req.body.website;
  user.email = req.body.email;
  user.objective = req.body.objective;
  user.education.push({
    institution_name: req.body.institution_name,
    course: req.body.course,
    grade: req.body.grade,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    edu_description: req.body.edu_description,
  });
  user.certification.push({
    course_name: req.body.course_name,
    organisation: req.body.cer_organisation,
    cer_description: req.body.cer_description,
  });
  user.workexp.push({
    wrk_organisation: req.body.wrk_organisation,
    role: req.body.role,
    wrk_start_date: req.body.wrk_start_date,
    wrk_end_date: req.body.wrk_end_date,
    wrk_description: req.body.wrk_description,
  });
  user.skill.push(req.body.skill);
  user.hobbies.push(req.body.hobbies);
  user.language.push({
    language_name: req.body.language_name,
    read: req.body.read,
    write: req.body.write,
    speak: req.body.speak,
    level: req.body.level,
  });
  console.log(req.body);

  user.save();
  res.send("sucessfully saved");
});

//Display data from database
var user = mongoose.model("usermodels", userschema);
app.get("/view", (req, res) => {
  user.findOne({}, function (err, item) {
    if (err) return next(err);
    //view image
    res.contentType(item.photo.contentType);
    res.send(item.photo.data);
    //view data
    data = [
      item.first_name,
      item.last_name,
      item.address,
      item.city,
      item.state,
      item.phone_number,
      item.website,
      item.email,
      item.objective,
      item.education,
      item.certification,
      item.workexp,
      item.skill,
      item.hobbies,
      item.language,
    ];

    res.send(data);
  });
});

app.listen(port, () => {
  console.log("app is running in port", { port });
});
