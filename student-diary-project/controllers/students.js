const Student = require('../models/students');
const student = require('../models/students');
const diary = require('../models/students');
const Diary = require('../models/diaries');


function index(req, res) {
    Student.find({}, function(err, students) {
        res.render('students/index', {students})
    })
}


function show(req, res) {
    Student.findById(req.params.id, function(err, student){
            res.render('students/show', {student, diary})
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


function update(req, res){
    console.log("re", req.body);
    Student.findByIdAndUpdate(req.params.id, req.body, function(err, student) {
        // console.log("checklist", checklist); 
            res.redirect(`/students/${student.id}`)
    })
}

module.exports = {
    index, 
    show, 
    new: newStudent,
    create,
    delete: deleteOne,
    update,
}