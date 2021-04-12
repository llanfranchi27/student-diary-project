const Diary = require('../models/diaries');
const Student = require('../models/students');

module.exports = {
    show,
    new: newDiary, 
    create,
}

// function newDiary(req, res) {
//     Diary.find({},function(err, diaries){
//         res.render("/diaries/new", {
//             name: "Add Diary Entry",
//             diaries,

//         });
//     });

// }

function show(req, res) {
  Diary.findById(req.params.id, function(err, diaries){
  res.render('diaries/show', { diary })
})
}

function newDiary(req, res) {
  res.render('diaries/show', { name: "Add Diary Entry"});
}

	function create(req, res) {
        Student.findById(req.params.id, function(err, student) {
          student.diaries.push(req.body);
          student.save(function(err) {
            res.redirect(`diaries/show`);
          });
        });
      }

      