var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
    console.log('Serializing...');
   });
passport.deserializeUser(function(user, done) {
done(null, user);
console.log('Deserializing...');
});

passport.use(
 new GoogleStrategy(
  {
    clientSecret: "1WvyCKuWRq2aws0kioYAUh92",
    clientID:"755334228756-56ibgsrli3rpavd6q5hg3jdocauetumm.apps.googleusercontent.com",
    // project_id:"final-project-238217",
    callbackURL:"http://localhost:3000/auth/google/callback",
    // javascript_origins:"http://localhost:3000",
 
  },
 
  function(accessToken, refreshToken, profile, done) {
   var userData = {
    email: profile.emails[0].value,
    name: profile.displayName,
    token: accessToken
   };
   console.log(userData);
   done(null, userData);
  }
 )
);

