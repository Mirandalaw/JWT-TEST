const express = require('express');
const router = express.Router();
const models = require('../models/index')
const controller = require('../controller/board.controller');
const validation = require('../validation/boardValidation');

router.get('/',controller.showAll);
router.get('/:id',controller.showOne);
router.post('/',validation.boardDataCheck,controller.create);
router.put('/:id',validation.boardDataCheck,controller.update);
router.delete('/:id',controller.destroy);

module.exports = router;