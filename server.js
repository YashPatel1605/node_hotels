const express = require("express");
const db = require("./db");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body

const personRouter = require("./routes/personRoutes");
const dataRoutes = require("./routes/dataRoutes");

app.use("/person", personRouter);
app.use("/data", dataRoutes);

app.listen(3000, () => {
  console.log("Server is running on port number 3000");
});
