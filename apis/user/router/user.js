const express = require('express');
const app = express();
const router = express.Router();
const models = require('../models/index');
const controller = require('../controller/user.controller');
const validation = require('../validation/userValidation');
const jwt = require('../modules/jwt');
const authUtil = require('../middelswares/auth').checkToken;


router.get('/check',authUtil,(req,res)=>{
    const user = req.userId;
    console.log(req.userId);
    res.json({user});
})
router.get('/',controller.showAll);
router.get('/:id',controller.showOne);
router.post('/',validation.userValidation,controller.createUser);
router.post('/login',controller.signIn);
router.put('/:id',validation.userValidation,controller.update);
router.delete('/:id',controller.destroy);
module.exports = router;