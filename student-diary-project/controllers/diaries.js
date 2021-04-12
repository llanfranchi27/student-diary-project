const Diary = require('../models/diaries');
const Student = require('../models/students');

module.exports = {
    new: newDiary, 
    create
}

function newDiary(req, res) {
    Diary.find({},function(err, diaries){
        res.render("diaries/new", {
            name: "Add Diary Entry",
            diaries,

        });
    });

}


	function create(req, res) {
        Student.findById(req.params.id, function(err, student) {
          student.diaries.push(req.body);
          student.save(function(err) {
            res.redirect(`/students/${student._id}`);
          });
        });
      }

      