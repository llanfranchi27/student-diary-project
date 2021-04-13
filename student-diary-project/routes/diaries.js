var express = require('express');
var router = express.Router();
const diariesCtrl = require('../controllers/diaries');
// const diaries = require('../models/diaries');

// router.get('/diaries/new', diariesCtrl.new);
router.post('/students/:id/diaries', diariesCtrl.create);
// router.post('/students/:id/diaries', diariesCtrl.addToStudent);



module.exports = router;

      