import mongoose from 'mongoose' ; 

let Schema =  mongoose.Schema ;

let NotificationShema = new Schema({
    sender: {
        id: String,
        username: String,
        avatar: String
    },
    receiver: {
        id: String , 
        username: String,
        avatar: String
    },
    type: String,
    content: String,
    isRead: {type: Boolean, default: false},
    createAt: {type: Number, default: Date.now}



}); 

module.exports  - mongoose.model("notification", NotificationShema); 

