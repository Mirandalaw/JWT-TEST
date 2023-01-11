const express = require('express');
const app = express();
const router = express.Router();
const models = require('../models/index');
const controller = require('../controller/user.controller');

router.get('/',controller.showAll);
router.get('/:id',controller.showOne);
router.post('/',controller.create);
router.put('/:id',controller.update);
router.delete('/:id',controller.destroy);

module.exports = router;