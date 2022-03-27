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