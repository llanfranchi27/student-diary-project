var express = require('express');
var router = express.Router();
const diariesCtrl = require('../controllers/diaries');



router.post('/students/:id/diaries', diariesCtrl.create);




module.exports = router;
