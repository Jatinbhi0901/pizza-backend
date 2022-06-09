const express = require('express');
const cors= require('cors');
const mongoose= require('mongoose');
const morgan=require('morgan');
const path=require('path');
const bodyParser=require('body-parser');

const registerRoutes=require('./routes/register.route');
const loginRoutes=require('./routes/login.route');
const profileRoutes=require('./routes/profile.route');
const cartRoutes=require('./routes/cart.route');
const productRoutes=require('./routes/product.route');


var app = express();
app.use(cors());
app.use(express.json());

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/register', registerRoutes);
app.use('/login',loginRoutes);
app.use('/profile',profileRoutes);
app.use('/cart',cartRoutes);
app.use('/product',productRoutes);

app.use('/uploads',express.static('uploads'));

require('dotenv/config');
const db=process.env.DATABASE;
mongoose.connect(db,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>{
    console.log("Database connected");
}).catch(err=>{
    console.log("Database not connected "+ err);
});


app.use((req,res,next) => {
    const error= new Error('Not Found!');
    error.status=404;
    next(error);
})

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message
    })
})

module.exports=app;