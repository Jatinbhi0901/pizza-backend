const router= require('express').Router();
const beverageController= require('../controllers/beverages.controller');
const multer= require('multer');
const { route } = require('./pizza.route');
const storage= multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, './uploads/');
    },
    filename: function(req,file,cb) {
        cb(null, file.originalname);
    }
});

const fileFilter= (req,file,cb) => {
    if(file.mimetype==='image/jpeg'|| file.mimetype==='image/png' || file.mimetype==='image/jpg'){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
}

const upload= multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.post('/addBeverage', upload.single('image'), beverageController.otherThanPizza);

module.exports= router;