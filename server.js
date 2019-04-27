var express = require('express');
var path = require('path');
var passport = require('passport');
var cloudinary = require('cloudinary');
var db = require('./models');
var users = require('./models/users');
var Keys = require('./config/keys');

require("./config/passport");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());



var PORT = process.env.PORT || 5005;
// Only for Deployment -HEROKU- Serve up static assets DO NOT TOUCHE !!!
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/client/public')));

// //Express Server Start
// app.listen(PORT, function () {
//     console.log('App listenning to port number : ' + PORT);
// });

//////////////  -----  API ROUTE GOES HERE (e.i: DATABASE REQUEST) -----   ////////////////////

// Google Login ROUTE

/* GET Google Authentication API. */
// app.get(
//     "/auth/google",
//     passport.authenticate("google", { scope: ["profile", "email"] },
//     ),
//     redir
// );
// app.get(
//     "/auth/google/callback",
//     passport.authenticate("google", { 
//         successRedirect: '/',
//         failureRedirect: "/signup" }),
//     function(req, res) {
//         var token = req.user.token;
//         console.log("user Token: "+token);
//         res.json({ email: "", loggedin: true }) // so that react can redirect client
//         // res.redirect("/admin");
//         // res.redirect("http://localhost:3000?token=" + token);
//     }
// );

app.get('/auth/google', passport.authenticate('google',{scope: 'email'}));

app.get('/auth/google/callback', function() {
    passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/signup'
    });
});

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
    var list = ["Will", "Dorothy", "Ry"];
    res.json(list);
    console.log('Sent list of items');
});

// TO DO: cloudinary photo cloud service API 

// Getting images with tag 'modern'//
app.get('/api/get_photos/modern', (req, res) => {
    // cloudinary.v2.api.resources_by_tag('tag name') to get images with tag name
    cloudinary.v2.api.resources_by_tag('modern',
        function (err, results) {
            // console.log(results)  
            res.json(results);
        }
    );
});
// Getting images with tag 'luxury'//
app.get('/api/get_photos/luxury', (req, res) => {
    // cloudinary.v2.api.resources_by_tag('tag name') to get images with tag name
    cloudinary.v2.api.resources_by_tag('luxury',
        function (err, results) {
            // console.log(results)  
            res.json(results);
        }
    );
});
// Getting images with tag 'antique'//
app.get('/api/get_photos/antique', (req, res) => {
    // cloudinary.v2.api.resources_by_tag('tag name') to get images with tag name
    cloudinary.v2.api.resources_by_tag('antique',
        function (err, results) {
            // console.log(results)  
            res.json(results);
        }
    );
});
// Getting images with tag 'decor'//
app.get('/api/get_photos/decor', (req, res) => {
    // cloudinary.v2.api.resources_by_tag('tag name') to get images with tag name
    cloudinary.v2.api.resources_by_tag('decor',
        function (err, results) {
            // console.log(results)  
            res.json(results);
        }
    );
});

cloudinary.config({
    cloud_name: Keys.cloud_name,
    api_key: Keys.api_key,
    api_secret: Keys.api_secret
}
)

//TO DO: database routes//
app.get("/api/db/favorites", (req, res) => {
    db.users.findAll({}).then((results) => {
        res.json(results);
        console.log(results);
    });
});


// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + 'client/public/index.html'));
});



var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
  });
  
  module.exports = app;
