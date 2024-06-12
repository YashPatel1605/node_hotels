const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});
const Data = mongoose.model("Data", personSchema);

module.exports = Data;
