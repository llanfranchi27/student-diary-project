const Diary = require('../models/diaries');
// const students = require('../models/students');
const Student = require('../models/students');

module.exports = {
    // new: newDiary, 
    // // show,
    // // addDiary,
    create,
    // addToStudent
}

// function newDiary(req, res){
//   Diary.find({}, function(err, diaries){
//     console.log('diary posted')
//     res.render('diaries/new', {
//       title: 'Add Diary',
//       diaries, 
//     });
//   })
// }


// function create(req, res){
//   const diary = new Diary(req.body);
//   diary.save(function(err){
//     if(err) return res.redirect('/diaries/');
//     res.redirect('/diaries');
//   })
    

// }

//  function addToStudent(req, res) {
//     Student.findById(req.params.id, function(err, student){
//       student.diary.push(req.body.studentId);
//       student.save(function(err){
//         res.redirect(`/students/${student._id}`)
//       })
//     })
//   }


// function newDiary(req, res) {
//   res.render('diaries/new', { name: "Diary Entry"});
// }

function create(req, res) {
  Student.findById(req.params.id, function(err, student) {
    student.diaries.push(req.body);
    student.save(function(err) {
      res.redirect(`/students/${student._id}`);
    });
  });
}

      