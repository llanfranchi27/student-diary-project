const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const diarySchema = new Schema ({
    date: {type: Date, required: true},
    mood: {type: String, required: true},
    diaryEntry: {type: String, required: true}, 
        timestamps: true
});

module.exports = mogoose.model('Diary', diarySchema);