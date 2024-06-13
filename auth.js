const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Person = require("./moduls/Person");

passport.use(
  new LocalStrategy(async (USERNAME, password, done) => {
    try {
      const user = await Person.findOne({ username: USERNAME });
      if (!user) {
        return done(null, false, { message: "incorrect username!!" });
      }
      const isPasswordMatch = user.comparePassword(password);
      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "incorrect password" });
      }
    } catch (error) {
      return done(error);
    }
  })
);
module.exports = passport;
