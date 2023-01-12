const {body,validationResult} =require('express-validator');

const userDataCheck = [
    body('name').notEmpty(),
    body('userId').isEmail().notEmpty(),
    body('userPwd').isLength({min:8,max:20}),
    (req,res,next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        next();
    }
];

module.exports = {userDataCheck};