const express = require("express");

const app = express(); // a function referring to the express

app.get("/", function(req, res){
    res.send("<h1>Helloo</h1>")
});


app.get("/contact", function(req, res){
    res.send('Contact me at : Email')
})

app.get("/about", function(req, res){
    res.send('I am P SIdharth, and I own this website, I am a sophomore @ GITAM UNi')
})


app.get("/hobbies", function(req, res){
    res.send('I am a hobbyiest of programming')
})

app.listen(3000, function(){
    console.log("Server started at port 3000")
});

