const mongoose= require('mongoose');

const profileSchema= new mongoose.Schema({
    firstName: {type: String, default: ""},
    lastName: {type: String, default: ""},
    email: {type:String, required:true, unique: true},
    phnNo: {type: Number, default: null},
    dateOfBirth: {type: Date, default: null},
    gender: {type: String, default: ""},
    country: {type: String, default: ""},
    state: {type: String, default: ""},
    address: {type: String, default: ""}
})

module.exports= mongoose.model('profile', profileSchema);