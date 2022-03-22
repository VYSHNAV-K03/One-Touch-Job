const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({
  path: "server/.env",
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  passion: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  profile: {
    data: Buffer,
    contentType: String,
  },
  resetToken: {
    type: String,
  },
  expireToken: { type: Date },
  skills: [Object],
  Role: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  messages: [
    {
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
  ],
  files: [Object],
  portfolio: {
    photo: { data: Buffer, contentType: String },
    first_name: {
      type: String,
      default: "",
    },
    last_name: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    phone_number: {
      type: String,
      default: "",
    },
    website: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    objective: {
      type: String,
      default: "",
    },
    education: [
      {
        institution_name: {
          type: String,
          default: "",
        },
        course: {
          type: String,
          default: "",
        },
        grade: {
          type: String,
          default: "",
        },
        start_date: Date,
        end_date: Date,
        edu_description: {
          type: String,
          default: "",
        },
      },
    ],
    certification: [
      {
        course_name: {
          type: String,
          default: "",
        },
        cer_organisation: {
          type: String,
          default: "",
        },
        cer_description: {
          type: String,
          default: "",
        },
      },
    ],
    workexp: [
      {
        wrk_organisation: {
          type: String,
          default: "",
        },
        role: {
          type: String,
          default: "",
        },
        wrk_start_date: Date,
        wrk_end_date: Date,
        wrk_description: {
          type: String,
          default: "",
        },
      },
    ],
    skill: [String],
    hobbies: [String],
    language: [
      {
        language_name: {
          type: String,
          default: "",
        },
        read: { type: Boolean, default: false },
        write: { type: Boolean, default: false },
        speak: { type: Boolean, default: false },
        level: {
          type: String,
          default: "",
        },
      },
    ],
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//hashing the password here

//hashing occurs before save

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    console.log(token);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log("auth", err);
  }
};

//add messages
userSchema.methods.addMessages = async function (name, phone, message) {
  try {
    this.messages = this.messages.concat({ name, phone, message }); //adding
    await this.save();
    return this.messages;
  } catch (err) {
    console.log(err);
  }
};

userSchema.methods.addFiles = async function (file, id) {
  try {
    this.files = this.files.concat({ file: file, _id: id }); //adding
    await this.save();
    return this.files;
  } catch (err) {
    console.log(err);
  }
};
// userSchema.plugin(require("mongoose-beautiful-unique-validation"));

const User = mongoose.model("USE", userSchema);

module.exports = User;
