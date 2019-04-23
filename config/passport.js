var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
passport.serializeUser(function(user, done) {
 done(null, user);
});
passport.deserializeUser(function(user, done) {
 done(null, user);
});
passport.use(
 new GoogleStrategy(
  {
   clientID: "755334228756-56ibgsrli3rpavd6q5hg3jdocauetumm.apps.googleusercontent.com",
   clientSecret: "1WvyCKuWRq2aws0kioYAUh92",
   callbackURL: "http://localhost:5005/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   var userData = {
    email: profile.emails[0].value,
    name: profile.displayName,
    token: accessToken
   };
   done(null, userData);
  }
 )
);