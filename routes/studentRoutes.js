const express = require('express')
const {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent
} = require('../controllers/studentController')

const router = express.Router()

router.post('/createStudent', createStudent)
router.get('/getStudent', getStudents)
router.put('/updateStudent/:id', updateStudent)
router.delete('/deleteStudent/:id', deleteStudent)

module.exports = router
