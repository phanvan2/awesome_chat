import express from 'express'; 
import ConnectDB from "./config/connectDB" ; 
import ContactModel from "./models/contact.model" ; 
let app = express(); 

ConnectDB() ; 
let hostname = "localhost";
let port = 5000; 

app.get("/hello" , (req , res) => {
    res.send("<h1> hello world </h1>") ; 
}) ; 

app.get("/test-database", async (req, res) => {
    try{
        let item = {
            userId: "21242" , 
            contactId: "4221",
        } ; 
        let contact = await ContactModel.createNew(item) ; 
        res.send("ok rồi "); 
    }catch(err){
        console.log(err) ; 
    }
}); 

app.listen( port , hostname, ()=> {
    console.log(process.env) ; 
    console.log("hello phan vann") ; 
}) ; 
