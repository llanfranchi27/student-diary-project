var express = require('express');
var router = express.Router();
const studentsCtrl = require('../controllers/students')

router.get('/', studentsCtrl.index);
router.get('/new', studentsCtrl.new);
router.get('/:id', studentsCtrl.show);
router.post('/', studentsCtrl.create);
router.delete('/:id', studentsCtrl.delete);
router.put('/:id', studentsCtrl.update);



module.exports = router;









