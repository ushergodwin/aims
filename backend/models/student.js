const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 65
    },
    st_no: {
        type: String,
        required: true
    },
    reg_no: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true,
        default: "BIST"
    },
    phone_number: {
        type: String,
        maxlength: 14,
        minlength: 10,
        required: true
    },
    password: {
        type: String,
        maxlength: 255
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})

const Student = mongoose.model('Student', studentSchema)
exports.Student = Student