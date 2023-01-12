const {body,validationResult} = require('express-validator');

const boardDataCheck = [
    body("title").isString().notEmpty(),
    body("content").isLength({min:0,max: 500}),
    body('userId').isEmail().notEmpty(),
    (req,res,next) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        next();
    }
];

module.exports = {boardDataCheck};