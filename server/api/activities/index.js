'use strict';
var express = require('express');
var controller = require('./controller');
var router = express.Router();

router.get('/', controller.allactivity);
router.get('/:token', controller.allactivityauth);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.get('/username/:username', controller.userActivities);


module.exports = router;