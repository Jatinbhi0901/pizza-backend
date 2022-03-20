const mongoose = require('mongoose');

const registerationSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        match: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
    },
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phnNo: {
        type: Number,
        required: true
    },
    country: {type: String},
    state: {type: String},
    postalZip: {type: String},
})