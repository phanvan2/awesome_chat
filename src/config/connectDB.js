import mongoose from "mongoose";
import bluebird from "bluebird"; 

let connectDB = () => {
    mongoose.Promise = bluebird ; 
    console.log( process.env) ; 
//mongodb://localhost/
    let URI =  `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}` ; 

    return mongoose.connect(URI, {useMongoClient: true}) ; 
} ; 

module.exports = connectDB ; 
