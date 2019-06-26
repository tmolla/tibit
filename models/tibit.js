const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tibitSchema = new Schema({
  action: { type: String, required: true },
  goal: {type:String, required: true},
  location: {type:String, required: true},
  date: { type: Date, default: Date.now },
  note: String
  
});

const Tibit = mongoose.model("Tibit", tibitSchema);

module.exports = Tibit;