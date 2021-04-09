var express = require('express');
var router = express.Router();
const studentsCtrl = require('../controllers/students')

router.get('/', studentsCtrl.index);
router.get('/new', studentsCtrl.new);
router.get('/:id', studentsCtrl.show);
router.post('/', studentsCtrl.create);
router.delete('/:id', studentsCtrl.delete);

module.exports = router;












// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });