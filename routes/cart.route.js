const express = require('express');
const router = require("express").Router();
const mongoose = require('mongoose');
const cartController= require('../controllers/cart.controller');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './uploads/');
    },
    filename: function(req,file,cb){
        cb(null, file.originalname);
    }
})
const fileFilter = (req,file,cb) =>{
    if(file.mimetype==='image/jpeg'|| file.mimetype==='image/png' || file.mimetype==='image/jpg'){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
}
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.post('/add', upload.single('pizzaImage'), cartController.addItem);

module.exports = router;