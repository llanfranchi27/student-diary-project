const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: String,
    location: String,
    preCodingExp: Boolean
})


module.exports = mongoose.model('Student', studentSchema)
        