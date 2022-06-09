const product= require('../models/product');

exports.addProduct= (req,res,next) => {
    const cartValues= new product ({
        name: req.body.name,
        image: url+req.file.path,
        description: req.body.description,
        size: {
            Regular: {price: req.body.size.Regular.price},
            Medium: {price: req.body.size.Medium.price},
            Large: {price: req.body.size.Large.price}
        },
        crust: {
            New_Hand: {price: req.body.crust.New_Hand.price},
            Classic: {price: req.body.crust.Classic.price},
            Cheese_Burst: {price: req.body.crust.Cheese_Burst.price}
        }
    });
    cartValues.
    exec()
    .save()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: 'Product added'
        })
    })
    .catch((err) => {
        message: err
    })
}