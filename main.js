
// Import Files and Libraries
const express = require("express");
const bodyParser = require("body-parser");
const data=require('./vanresjson.json');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));


// define location of static files

app.use("/static",express.static('public'));

app.use(express.static(__dirname + '/public'));
app.set("view engine","ejs");


// set the get and post routes and request and response

app.get("/",function(req,res){
    res.render("index");
})

app.get("/index",function(req,res){
    res.render("index");
})

app.get("/courses",function(req,res){
    res.render("courses",{data:data.courses});
})

app.get("/contact",function(req,res){
    res.render("contact");
})

var mailID="";

app.post("/thanks",function(req,res){
    var email=req.body.email;
    res.render("thanks",{Email:email});

})
// set up the server, log the start

app.listen(3000,function(){
    console.log("Running on port 3000!!!");
});
