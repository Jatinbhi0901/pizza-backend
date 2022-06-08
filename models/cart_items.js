const mongoose = require("mongoose");

const cartSchema= new mongoose.Schema({
    name: {type: String, required: true},
    pizzaImage: {type: String},
    description: {type: String, default:""},
    quantity: {type: Number, required: true},
    price: {type: Number, required: true},
    size: {type: String, required: true},
    crust: {type: String, required: true},
    total_cost: {type: Number, default:""}
});

module.exports= mongoose.model('cartValue', cartSchema);

