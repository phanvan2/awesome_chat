var express = require('express') ; 
var app = express(); 

var hostname = "localhost";
var port = 5000; 

app.get("/hello" , (req , res) => {
    res.send("<h1> hello world </h1>") ; 
}) ; 

app.listen( port , hostname, ()=> {
    console.log("hello phan vann")
}) ; 
