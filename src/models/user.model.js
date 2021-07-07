import mongoose from 'mongoose' ; 

let Schema =  mongoose.Schema ;

let UserShema = new Schema({
    username: String,
    gender: {type: String, default: "male"} ,
    phone: {type: Number, defautl: null},
    address: {type: String, default: null},
    avatar: {type: String, default: "avatar-default.jpg"},
    role: {type: String, default: "user"},
    local: {
        email: {type: String, trim: true},
        password: String, 
        isAcitve: {type: Boolean, default: false},
        verifyToken: String
    },
    facebook: {
        uid: String, 
        token: String, 
        email: {type: String, trim: true}
    },
    google: {
        uid: String, 
        token: String, 
        email: {type: String, trim: true}
    },
    createAt: {type: Number, default: Date.now}, 
    updateAt: {type: Number, default: null}, 
    deleteAt: {type: Number, default: null},




    
}); 

module.exports  - mongoose.model("user", UserShema); 

//Đây là file trên máy tính (Hiện tại tạm tính chưa có sự thay đổi)
// Bây giờ mình thêm mấy khoảng trắng xuống dòng thì mình sẽ xử lý trên nhánh _model
// Tôi Đã xóa khoảng trắng dư thừa
// Them khoang trang du thua