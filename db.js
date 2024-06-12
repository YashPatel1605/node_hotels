const mongoose = require("mongoose");

const databaseURL = "mongodb://localhost:27017/data";

mongoose.connect(databaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected mongoDb server");
});
db.on("error", (error) => {
  console.log("error" + error);
});
db.on("disconnected", () => {
  console.log("disconnected mongoDB server");
});

module.exports = db;
