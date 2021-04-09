const Student = require('../models/students');


function index(req, res) {
    Student.find({}, function(err, students) {
        res.render('students/index', {students})
    })
}

function show(req, res) {
    Student.findById(req.params.id)
    res.render('students/show', {student})
}

function newStudent(req, res) {
    res.render('students/new', { name: "Student Name"});
}

function create(res, res){

}

function deleteOne(req, res){

}

module.exports = {
    index, 
    show, 
    new: newStudent,
    create,
    delete: deleteOne
}