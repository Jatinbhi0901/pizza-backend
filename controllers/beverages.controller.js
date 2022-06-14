const beverage= require('../models/beverages_data');

exports.otherThanPizza= (req,res,next) => {
    const newBeverage= new beverage({
        type: req.body.type,
        image: url+req.file.path,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });

    newBeverage
    .save()
    .then(result => {
        if(result){
            res.status(200).json({
                message: 'Item added Successfully!'
            })
        }
    })
    .catch((err) => {
        res.status(400).json({
            message: err
        })
    })
}

// get beverages

exports.getBeverages = (req,res,next) => {
    beverage.find({type: req.params.type})
    .exec()
    .then(result => {
        if(result<1){
            return res.status(400).json({
                message: "no data found"
            })
        }
        res.status(200).json({
            beverage: result
        })
    })
    .catch((err) => {
        res.status(400).json({
            error: err
        })
    })
}