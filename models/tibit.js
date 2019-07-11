const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tibitSchema = new Schema({
  action: { type: String, required: true },
  color:{type:String, default:"rgb(84, 199, 119)"},
  date: { type: Date, default: Date.now },
  owner: {
    type: Schema.Types.ObjectId,
    ref:"User"
  }
});

const Tibit = mongoose.model("Tibit", tibitSchema);

module.exports = Tibit;