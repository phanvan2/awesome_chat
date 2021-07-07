import mongoose from 'mongoose' ; 

let Schema =  mongoose.Schema ;

let chatGroupShema = new Schema({
    name: String, 
    userAmount: {type: Number, min: 3, max: 100},
    messageAmount: {type: Number, default: 0},
    userId: String,
    members: [
        {userId: String}
    ],
    createAt: {type: Number, default: Date.now}, 
    updateAt: {type: Number, default: null}, 
    deleteAt: {type: Number, default: null}, 


}); 

module.exports  - mongoose.model("chatGroup", chatGroupShema); 

