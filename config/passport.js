const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");
console.log("in passport moduele")
const opts = {};
console.log(keys.secretOrKey)
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
console.log("after extract")
opts.secretOrKey = keys.secretOrKey;
console.log("before export")
module.exports = passport => {
  console.log("in passport use")
    console.log(opts)
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      console.log("Molla")
      console.log(jwt_payload.id)
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
