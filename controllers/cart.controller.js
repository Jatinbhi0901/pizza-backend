const carts= require('../models/cart_items');

exports.addItem= (req,res,next) =>{

    if(req.file){
        const cost= req.body.quantity * req.body.price;
        const cartValues= new carts ({
            name: req.body.name,
            pizzaImage: url+req.file.path,
            description: req.body.description,
            quantity: req.body.quantity,
            price: req.body.price,
            size: req.body.size,
            crust: req.body.crust,
            total_cost: cost
        });
    
        cartValues.save().
        then(result=> {
            console.log(result);
            res.status(200).json({
                message: "Item added successfully!"
            })
        })
        .catch((err)=>{
    
            message: err
        })
    }
    else{
        const cartValues= new carts ({
            name: req.body.name,
            description: req.body.description,
            quantity: req.body.quantity,
            price: req.body.price,
            size: req.body.size,
            crust: req.body.crust,
            total_cost: cost
        });
    
        cartValues.save().
        then(result=> {
            res.status(200).json({
                message: "Item added successfully!"
            })
        })
        .catch((err)=>{
    
            message: err
        })
    }
    
}