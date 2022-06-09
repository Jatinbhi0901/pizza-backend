const mongoose= require('mongoose');

const productSchema= new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String},
    description: {type: String, default:""},
    size: {
        Regular: {price: {type: Number}},
        Medium: {price: {type: Number}},
        Large: {price: {type: Number}}
    },
    crust: {
        New_Hand: {price: {type: Number}},
        Classic: {price: {type: Number}},
        Cheese_Burst: {price: {type: Number}}
    }
});

module.exports= mongoose.model('product', productSchema);