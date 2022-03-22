const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const reader = require("xlsx");
const fs = require("fs");

const corsOptions = {
  origin: "https://onetouchjob-app.herokuapp.com/",
  // origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

require("dotenv").config({
  path: "server/.env",
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const fileRoutes = require("./router/auth");
const quizRoutes = require("./router/quiz");
const workshopRoute = require("./router/workshoproute");
const portfolioRoute = require("./router/portfolioroute");
const coursesRoute = require("./router/coursesroute");

app.use(bodyParser.json());

app.use("/api", fileRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/workshop", workshopRoute);
app.use("/api/portfolio", portfolioRoute);
app.use("/api/courses", coursesRoute);

app.use("/uploads", express.static(path.join("uploads")));

require("./db/conn");
const User = require("./models/userSchema");

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV == "production") {
  const path = require("path");
  app.use(express.static(path.join("client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("client/build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
