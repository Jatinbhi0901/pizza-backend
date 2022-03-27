const express = require('express');
const profile = require('../models/profile');

exports.getProfile = (req,res,next) => {
    profile.findOne({email: req.body.email})
    .exec()
    .then(result => {
        if(!result){
            return res.status(401).json({
                message: 'User not found'
            })
        }
        return res.status(200).json({
            profile: result
        })
    })
}

exports.updateProfile = (req,res,next) => {
    let firstName,lastName,phnNo, dateOfBirth, gender, country, state, address;
    firstName= req.body.firstName,
    lastName= req.body.lastName,
   // email: req.body.email,
    phnNo= req.body.phnNo,
    dateOfBirth= req.body.dateOfBirth,
    gender= req.body.gender,
    country= req.body.country,
    state= req.body.state,
    address= req.body.address

    profile.findOneAndUpdate({email: req.body.email},{
        $set: {
            firstName,
            lastName,
            phnNo,
            dateOfBirth,
            gender,
            country,
            state,
            address
        }
    })
    .exec()
    .then(result => {
        if(!result){
            return res.status(401).json({
                message: 'User not found'
            })
        }
        return res.status(200).json({
            message: 'Profile updated successfully'
        })
    })
    .catch(err => {
        res.status(400).json({
            message: err
        })
    })
}