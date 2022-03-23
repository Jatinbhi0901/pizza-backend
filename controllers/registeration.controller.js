const express = require('express');
const register = require('../models/registeration');
const bcrypt = require("bcrypt");

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
            if (req.body.password !== req.body.confirmPassword) {
                return res.status(400).json({
                    message: "Password mismatch"
                })

            }
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                const details  = new register({
                    email: req.body.email,
                    password: hash
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
            })
            
        }
    })
    .catch(err => {
        res.send(err)
    })
    
    
    
}