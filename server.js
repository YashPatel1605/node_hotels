const express = require("express");
const db = require("./db");
const app = express();
const personRouter = require("./routes/personRoutes");
const dataRoutes = require("./routes/dataRoutes");
const passport = require("./auth");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body

//middleware function
const logRequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] Request made to :${req.originalUrl}`
  );
  next(); //move to the next phase
};

app.use(logRequest);
app.use(passport.initialize());

const localAuthMiddelware = passport.authenticate("local", { session: false });
app.get("/", (req, res) => {
  res.send("welcome to the hotels");
});

app.use("/person", personRouter);
app.use("/data", dataRoutes);

app.listen(3000, () => {
  console.log("Server is running on port number 3000");
});
