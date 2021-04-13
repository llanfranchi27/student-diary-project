const Diary = require('../models/diaries');
const Student = require('../models/students');

module.exports = {
    new: newDiary, 
    // show,
    // addDiary,
    create,
}




function newDiary(req, res) {
  res.render('diaries/new', { name: "Diary Entry"});
}

function create(req, res) {
  Student.findById(req.params.id, function(err, student){
    student.diaries.push(req.body);
    student.save(function(err){
      res.redirect(`/students/${student._id}`);
    });
  });
}
// function create(req, res){
// Diary.create(req.body);
//       res.redirect('/students/show');

//   }


// function newDiary(req, res) {
//     Diary.find({},function(err, diaries){
//         res.render("/diaries/new", {
//             name: "Add Diary Entry",
//             diaries,

//         });
//     });

// }

// function show(req, res) {
//   Diary.findById(req.params.id, function(err, diaries){
//   res.render('diaries/show', { diaries })
// })
// }

// function newDiary(req, res) {
//   res.render('diaries/show', { name: "Add Diary Entry"});
// }



// 	function addDiary(req, res) {
//         Student.findById(req.params.id, function(err, student) {
//           student.diaries.push(req.body);
//           student.save(function(err) {
//             res.redirect(`diaries/show`);
//           });
//         });
//       }

      