const mongoose = require('mongoose');
const validator = require('validator');

const registerationSchema = new mongoose.Schema({
    email: {
        type: String, unique: true,required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid")
            }
        }
    },
    password: {type: String, required: true}
})

module.exports =  mongoose.model('users',registerationSchema);