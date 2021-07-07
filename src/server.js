import express from 'express'; 
let app = express(); 

let hostname = "localhost";
let port = 5000; 

app.get("/hello" , (req , res) => {
    res.send("<h1> hello world </h1>") ; 
}) ; 

app.listen( port , hostname, ()=> {
    console.log("hello phan vann")
}) ; 