const pizza= require('../models/pizza_data');

exports.addPizza= (req,res) => {
    if(req.file){
        const newPizza= new pizza({
            type: req.body.type,
            name: req.body.name,
            image: url+req.file.path,
            description: req.body.description,
            size: {
                regular: {
                    crust: {
                        newHandTossed: {regularNewHandPrice: req.body.regularNewHandPrice},
                        cheeseBurst: {regularCheeseBurstPrice: req.body.regularCheeseBurstPrice},
                        freshPan: {regularFreshPanPrice: req.body.regularFreshPanPrice}
                    }
                },
                medium: {
                    crust: {
                        newHandTossed: {mediumNewHandPrice: req.body.mediumNewHandPrice},
                        cheeseBurst: {mediumCheeseBurstPrice: req.body.mediumCheeseBurstPrice},
                        freshPan: {mediumFreshPanPrice: req.body.mediumFreshPanPrice}
                    }
                },
                large: {
                    crust: {
                        newHandTossed: {largeNewHandPrice: req.body.largeNewHandPrice},
                        cheeseBurst: {largeCheeseBurstPrice: req.body.largeCheeseBurstPrice},
                        freshPan: {largeFreshPanPrice: req.body.largeFreshPanPrice}
                    }
                }
            }
        });
        
        newPizza
        .save()
        .then(result => {
            if(result){
                res.status(200).json({
                    message: "Pizza added successfully!"
                })
            }
        })
        .catch((err) => {
            message: err
        })
    }
    else{
        res.status(404).json({
            message: "Error occured"
        })
    }
}

// to get details

exports.getpizza = (req,res,next) => {
    pizza.find({type: req.body.type})
    .exec()
    .then(pizzaDetail => {
        if(pizzaDetail<1){
            return res.status(400).json({
                message: "no data found"
            })
        }
        res.status(200).json({
            pizza: pizzaDetail
        })
    })
}