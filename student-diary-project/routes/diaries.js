var express = require('express');
var router = express.Router();
const diariesCtrl = require('../controllers/diaries')

router.get('/diaries/new', diariesCtrl.new);
router.get('/:id', diariesCtrl.show);
router.post('/diaries', diariesCtrl.create);
router.delete('/:id', diariesCtrl.delete);
router.get('/:id/edit', diariesCtrl.edit);
router.put('/:id', diariesCtrl.update);


module.exports = router;

