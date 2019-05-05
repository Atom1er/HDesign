var LocalStrategy = require('passport-local').Strategy;


function localStrategy(passport, db){
  passport.use(new LocalStrategy(
    {usernameField:"user_email", passwordField:"user_password"},
    function(user_email, user_password, done) {
  
      //try to find user
    db.users.findOne({
      where: {
        user_email: user_email,
        user_password: user_password // there are better ways to verify password
      }
    })
    .then(function(user){
      if(!user){
        // if we can't find the user... return error
        // console.log(err);
        var err ="NO User found";
        return done(err, null);
      }
      else{
        //more magic after finding the user
        return done(null, user);
      }
    })
    .catch( err => {
      console.log(err);
      return done(err, null);
    });
    }
  ))

  // when we save a user to a session
passport.serializeUser(function(user, done) {
  // console.log(user)
  done(null, user.id);
});

// when we retrieve the data from a user session
passport.deserializeUser(function(id, done) {
    console.log("id "+id);
  db.users.findOne({ where: {id: id }})
  .then(function (user) {
      done(null, user);
  })
  .catch(error => {
      console.log(error);
      done(error, false);
  })  
  ;
});

}

module.exports=localStrategy;