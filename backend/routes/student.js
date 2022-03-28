const {Student} = require('../models/student')
const express = require('express')

const router = express.Router()

router.post('/students/create', async(req, res) => {
    const {name,st_no,reg_no, phone_number} = req.body
    const password = req.body.st_no
    let student = new Student({name,st_no,reg_no, phone_number, password})
    try {
        student = await student.save()
        res.status(200).json({
            success: true,
            document: student
        })
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                error: error.message
            })
        console.log(error.message);
    }
})


router.get('/students', (req, res, next) => {
    Student.find({}).sort({name: 'asc'})
    .then(students => {
        res.status(200).json({
            success: true,
            document: students,
        })
    })
    .catch(error => {
        res.status(404).json(
            {
                success: false,
                error: error.message
            })
    })
})


router.get('/students/:id', async (req, res, next) => {
    try {
        const student = await Student.findById(req.params.id)
        return res.status(200).json({
            success: true,
            document: student
        })
    } catch (error) {
        return res.status(404).json({
            success: false,
            error: error.message
        })
    }
})


router.put('/students/:id', async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            st_no: req.body.st_no,
            reg_no: req.body.reg_no, 
            phone_number: req.body.phone_number, 
            course: req.body.course
        }
        const filter = {_id: req.params.id}
        const student = await Student.updateOne(filter, data)

        if(student.modifiedCount > 0)
        {
            return res.status(200).json({
                success: true,
                document: student,
                isUpdated: true
            })
        }
    
        return res.status(202).json({
            success: false,
            error: "Student not updated"
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router