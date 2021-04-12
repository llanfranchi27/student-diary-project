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

function edit(req, res) {
    Student.findById (req.params.id, function(err, student) {
        res.render('students/edit', { title: "Students", subtitle: 'Edit Student Details', student })
    });
}

function update(req, res) {
    Student.findByIdAndUpdate(req.params.id, req.body, function(err, student) {
        if (err) {
            req.render('students/edit', { title: "Students", subtitle: "Edit Student Details", student});
        }
        res.redirect('students/${student.id}')
    });
}

function deleteOne(req, res){
    Student.findByIdAndRemove(req.params.id, function(err, student) {
        res.redirect('/students');
    })
}


module.exports = {
    index, 
    show, 
    new: newStudent,
    create,
    edit,
    update,
    delete: deleteOne
}