var express = require('express');
var path = require('path');

var app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

var PORT = process.env.PORT || 5005;

// Only for Deployment -HEROKU- Serve up static assets DO NOT TOUCHE !!!
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/client/public')));

//////////////  -----  API ROUTE GOES HERE (e.i: DATABASE REQUEST) -----   ////////////////////

// An api endpoint that returns a short list of results
app.get('/api/getList', (req,res) => {
    var list = ["Will", "Dorothy", "Ry"];
    res.json(list);
    console.log('Sent list of results');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'client/public/index.html'));
});

//Express Server Start
app.listen(PORT, function(){
    console.log('App listenning to port number : '+PORT);
});