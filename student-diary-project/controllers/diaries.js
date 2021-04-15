const Diary = require('../models/diaries');
const students = require('../models/students');
const Student = require('../models/students');

module.exports = {
    create, 
}


function create(req, res) {
  Student.findById(req.params.id, function(err, student) {
    student.diaries.push(req.body);
    student.save(function(err) {
      res.redirect(`/students/${student._id}`);
    });
  });
}