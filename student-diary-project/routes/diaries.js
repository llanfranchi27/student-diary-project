var express = require('express');
var router = express.Router();
const diariesCtrl = require('../controllers/diaries')

router.get('/diaries/', diariesCtrl.new);
router.get('/diaries/:id', diariesCtrl.show);
router.post('/diaries', diariesCtrl.create);



module.exports = router;

      