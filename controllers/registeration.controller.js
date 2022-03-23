const express = require('express');
const register = require('../models/registeration');

exports.registerUser = (req,res, next) => {
    register.find({email: req.body.email})
    .exec()
    .then((user) => {
        if(user.length >= 1){
            return res.status(409).json({
                message: "Mail already exists",
            });
        }
        else{
            const details  = new register({
                email: req.body.email,
                password: req.body.password
            });
            details
            .save()
            .then(result => {
                if(result){
                    res.status(200).json({
                        message: 'User Registered successfully'
                    })
                }
                else{
                    res.status(400).json({
                        message: 'Error while registering user'
                    })
                }
            })
            .catch(err => {
                res.send(err)
            })
        }
    })
    .catch(err => {
        res.send(err)
    })
    
    
    
}