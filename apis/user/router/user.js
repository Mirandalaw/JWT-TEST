const express = require('express');
const app = express();
const router = express.Router();
const models = require('../models/index');
const controller = require('../controller/user.controller');
const validation = require('../validation/userValidation')
router.get('/',controller.showAll);
router.get('/:id',controller.showOne);
router.post('/',validation.userDataCheck,controller.create);
router.put('/:id',validation.userDataCheck,controller.update);
router.delete('/:id',controller.destroy);

module.exports = router;