const express = require('express');
const app = express();
const router = express.Router();
const models = require('../models/index');
const controller = require('../controller/user.controller');
const validation = require('../validation/userValidation')
router.get('/',controller.showAll);
router.get('/:id',controller.showOne);
router.post('/',validation.userValidation,controller.createUser);
router.put('/:id',validation.userValidation,controller.update);
router.delete('/:id',controller.destroy);

module.exports = router;