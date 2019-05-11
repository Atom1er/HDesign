var express = require('express');
var path = require('path');
var passport = require('passport');
var cloudinary = require('cloudinary');
var db = require('./models');
var Keys = require('./config/keys');
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


require("./config/passport")(passport, db);


var PORT = process.env.PORT || 5005;
// Only for Deployment -HEROKU- Serve up static assets DO NOT TOUCHE !!!
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/client/public')));

//////////////////////////// PASSPORT ////////////////////////

///Registration////
app.post('/_api/user', (req, res) => {
    //try to find user
    db.users.findOne({
        where: {
            user_email: req.body.user_email
        }
    })
        .then(function (user) {
            if (!user) {
                // if we don't have user, create
                console.log("Will create user soon");
                db.users.create(req.body)
                    .then(dbUser => {
                        console.log(dbUser);
                        res.json(dbUser);
                    })
                    .catch(error => {
                        console.log(error);
                        res.json({ "message": "Error User Creation 1!" });
                    });
            }
            else {
                // otherwise, we have the user
                res.json({ "message": "User already in DB" });
            }

        })
        .catch(error => {
            console.log(error);
            res.json({ message: "Error User creation 2!" });
        });

});

////User Login
app.post('/_api/user/login',
    passport.authenticate('local'),
    function (req, res) {
        // req.user comes from passport
        if (req.user) {
            let temp = {};
            temp.email = req.user.user_email;
            temp.name = req.user.user_name;
            res.json(temp);
        }
        else {
            res.json(false);
        }
    });

app.get('/_api/user', (req, res) => {
    // req.user comes from passport
    if (req.user) {
        let temp = {};
        temp.email = req.user.user_email;
        temp.name = req.user.user_name;
        res.json(temp);
    }
    else {
        res.json(false);
    }
});

/// User LogOut
app.get('/_api/user/logout', function (req, res) {
    req.logout();
    res.json(true);
});

app.use(passport.session());

//////////////  -----  API ROUTES GOES HERE (e.i: DATABASE REQUEST) -----   ////////////////////

// TO DO: cloudinary photo cloud service API 
// Getting images with tag 'modern'//
app.get('/api/get_photos/modern', (req, res) => {
    // cloudinary.v2.api.resources_by_tag('tag name') to get images with tag name
    cloudinary.v2.api.resources_by_tag('modern', 
    {max_results: 20},
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
    {max_results: 20},
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
    {max_results: 20},
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
    {max_results: 20},
        function (err, results) {
            // console.log(results)  
            res.json(results);
        }
    );
});
//TO DO: delete image from cloud from admin site //
app.post('/api/cloud/public_id', (req, res) => {
    var public = req.body.publicId;
    console.log(public)
    cloudinary.v2.uploader.destroy(public, function (error, result) {
        console.log(result)
    });
});

//TO DO: Search image from home page search engine //
app.post('/api/cloud/user/search', (req, res) => {
    var searchUser = req.body.value;
    // console.log('testt!!!!!!!!' + searchUser);
    cloudinary.v2.api.resources_by_tag(searchUser,
        {max_results: 100},
        function (err, result) {
            // console.log(result)
            res.json(result);
        });
 })

//TO DO: Search image from home page search engine //
app.post('/api/cloud/user/search', (req, res) => {
    var searchUser = req.body.value;
    // console.log('testt!!!!!!!!' + searchUser);
    cloudinary.v2.api.resources_by_tag(searchUser,
        {max_results: 100},
        function (err, result) {
            // console.log(result)
            res.json(result);
        });
})


cloudinary.config({
    cloud_name: Keys.cloud_name,
    api_key: Keys.api_key,
    api_secret: Keys.api_secret
}
);

//TO DO: database routes//
// Users database favorites//
app.get("/api/db/users", (req, res) => {
    db.users.findAll({}).then((results) => {
        res.json(results);
        console.log("succes");
    });
});

// to store favorites in database //
app.post("/api/db/favItems", (req, res) => {
    db.favItems.create({
        // user_email: myEmail.slice(-1)[0],
        user_email: req.body.user_email,
        item_name: req.body.item_name
    }).then((results) => {
        res.json(results);
        console.log("succes");
    });
});

// to delete favorite items in database //
app.post("/api/db/favItemsDelete", (req, res) => {
    db.favItems.destroy({
        where: {
            // user_email: myEmail[0],
            item_name: req.body.item_name
        }
    }).then((results) => {
        res.json(results);
        console.log("succes");
    });
});

// to delete favorite items in database //
app.post("/api/db/createUser", (req, res) => {
    db.users.create({}).then((results) => {
        res.json(results);
        console.log("succes");
    });
});


//TO DO: user site getting images based on user email//
app.get("/api/db/favItems/users", (req, res) => {
    var favItemEmail = req.user.dataValues.user_email;
    console.log(favItemEmail);
    // myEmail.push(favItemEmail);
    //console.log("Tessstttt "+Object.keys(req.user.dataValues));
    if (req.user.dataValues.user_email) {
        db.favItems.findAll({
            where: {
                user_email: req.user.dataValues.user_email
            }

        }).then((results) => {
            res.json(results);
            // console.log(results);
        });
    }

});

// console.log('thiesfdslkfsldkf' + myEmail);

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
db.sequelize.sync(syncOptions).then(function () {
    app.listen(PORT, function () {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});

module.exports = app;
