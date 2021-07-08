import mongoose from 'mongoose' ; 

let Schema =  mongoose.Schema ;

let ContactShema = new Schema({
    userId: String , 
    contactId: String,
    status: {type: Boolean, default: false},
    createAt: {type: Number, default: Date.now}, 
    updateAt: {type: Number, default: null}, 
    deleteAt: {type: Number, default: null}, 


}); 

ContactShema.statics = {
    createNew(item) {
        return this.create(item) ; 
    }
}

module.exports  = mongoose.model("contact", ContactShema); 

