const router = require("express").Router();
const mongoose = require('mongoose');
const profileController = require('../controllers/profile.controller');

router.get('/getProfile', profileController.getProfile);
router.patch('/updateProfile', profileController.updateProfile);

module.exports = router;