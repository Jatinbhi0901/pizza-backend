const mongoose= require('mongoose');

const beverageSchema= new mongoose.Schema({
    type: {type: String, required: true},
    image: {type: String},
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    price: {type: Number, required: true}
});

module.exports= mongoose.model('beverageData', beverageSchema);