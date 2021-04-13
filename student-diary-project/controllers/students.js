const Student = require('../models/students');
const Diary = require('../models/diaries');


function index(req, res) {
    Student.find({}, function(err, students) {
        res.render('students/index', {students})
    })
}

function show(req, res) {
    Student.findById(req.params.id, function(err, student){
        Diary.find({ student: student._id }, function(err, diary) {
            res.render('students/show', {student, diary})
        })
})
}

function newStudent(req, res) {
    res.render('students/new', { name: "Student Name"});
}

function create(req, res){
	Student.create(req.body);
        res.redirect('/students');
    }


function deleteOne(req, res){
    Student.findByIdAndRemove(req.params.id, function(err, student) {
        // console.log('Student deleted', student)
        res.redirect('/students');
    })
}


module.exports = {
    index, 
    show, 
    new: newStudent,
    create,
    delete: deleteOne
}