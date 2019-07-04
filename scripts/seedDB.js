const mongoose = require("mongoose");
const db = require("../models");

// Clear tibit collection and insert new tibits

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/tibit"
);

const tibitSeed = [
  {
    action: "Read Chapter 1 from 'The Good The Bad and The Ugly'",
    goal: "Become Javascript Guru",
    location: "Some place in Tcuson",
    note:"This was very reviting read",
    date: new Date(Date.now())
  },
  {
    action: "Attended Bootcamp class'",
    goal: "Become Javascript Guru",
    location: "In Phoenix some place",
    note:"Very nice lecture today.",
    date: new Date(Date.now())
  }
];

db.Tibit
  .remove({})
  .then(() => db.Tibit.collection.insertMany(tibitSeed))
  .then(data => {
    //console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
