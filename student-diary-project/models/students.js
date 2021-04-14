const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const diarySchema = new Schema ({
    date: {type: Date, required: true},
    mood: {type: String, required: true},
    diaryEntry: {type: String, required: true}, 
});

const studentSchema = new Schema(
    {
    name: String,
    location: String,
    preCodingExp: Boolean,
    diaries: [diarySchema]
},
);




module.exports = mongoose.model('Student', studentSchema)
        