const express = require('express');
const register = require('../models/registeration');
const profile = require('../models/profile');
const bcrypt = require("bcrypt");
const validator = require('validator');
const nodemailer = require('nodemailer');

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
            if(!validator.isEmail(req.body.email)){
                return res.status(404).json({
                    message: "Invalid email"
                })
            }
            if (req.body.password !== req.body.confirmPassword) {
                return res.status(400).json({
                    message: "Password mismatch"
                })

            }
            if (!validator.isStrongPassword(req.body.password)) {
                return res.status(411).json({
                    message: "Please Enter Strong Pasword"
                })
            }

            bcrypt.hash(req.body.password, 10, (err, hash) => {
                const details  = new register({
                    email: req.body.email,
                    password: hash
                });
                details
                .save()
                .then(async(result) => {
                    let transporter = nodemailer.createTransport({
                        service: 'Gmail',
                        auth: {
                            user: process.env.MAIL,
                            pass: process.env.PASSWORD
                        }
                    });

                    let info = await transporter.sendMail({
                        from: "Donita Pizza Palace <donitapizzapalace@gmail.com>",
                        to: req.body.email,
                        subject: "Welcome to Donita Pizza Palace",
                        html: `<p>"Successfully registered" </p>`
                    });
                    if(info.messageId){
                        res.status(200).json({
                            message: 'User Registered successfully'
                        })
                    }
                    else{
                        res.status(400).json({
                            message: 'Error while sending email'
                        })
                    }
                //     const newProfile= new profile({
                //         firstName: req.body.firstName,
                //         lastName: req.body.lastName,
                //         email: req.body.email,
                //         phnNo: req.body.phnNo,
                //         dateOfBirth: req.body.dateOfBirth,
                //         gender: req.body.gender,
                //         country: req.body.country,
                //         state: req.body.state,
                //         address: req.body.address,
                //     });
                //     newProfile
                //     .save()
                 })
                .catch((err) => {
                    res.status(404).json({
                        message: err
                    })
                })
            })
            
        }
    })
    .catch(err => {
        res.send(err)
    })
    
    
    
}