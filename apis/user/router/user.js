const express = require('express');
const app = express();
const router = express.Router();
const models = require('../models/index');
const controller = require('../controller/user.controller');
const validation = require('../validation/userValidation');
const jwt = require('../modules/jwt');
const authUtil = require('../middelswares/auth').checkToken;

router.get('/check',authUtil,controller.check);
router.get('/',controller.showAll);
router.get('/:id',controller.showOne);
router.post('/',validation.userValidation,controller.createUser);
router.post('/login',controller.signIn);
router.put('/:id',authUtil,validation.userValidation,controller.update);
router.delete('/:id',controller.destroy);
router.post('/logout',controller.userLogout);
router.get('/logout',(req,res)=>{
    res.send('logout되었습니다.')
})
module.exports = router;