const express = require('express');
const router = express.Router();
const controller = require('../controller/board.controller');
const validation = require('../validation/boardValidation');

router.get('/',controller.showAll);
router.get('/:id',controller.showOne);
router.post('/',validation.boardValidation,controller.createBoard);
router.put('/:id',validation.boardValidation,controller.updateBoard);
router.delete('/:id',controller.destroyBoard);

module.exports = router;