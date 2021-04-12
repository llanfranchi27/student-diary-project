const Student = require('../models/students');


function index(req, res) {
    Student.find({}, function(err, students) {
        res.render('students/index', {students})
    })
}

function show(req, res) {
    Student.findById(req.params.id, function(err, student){
    res.render('students/show', {student})
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
    Student.deleteOne(req.params.id);
    res.redirect('/students');

}


module.exports = {
    index, 
    show, 
    new: newStudent,
    create,
    delete: deleteOne
}