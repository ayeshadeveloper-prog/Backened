const StudentModel = require('../models/Student')

const createStudent = async (req, res) => {
    const newStudent = new StudentModel(req.body)
    const dbStudent = await newStudent.save()

    res.status(200).json({
        status: 'success',
        data: dbStudent,
        message: 'Create Student API Called!'
    })
}

const getStudents = async (req, res) => {
    const studentsData = await StudentModel.find()

    res.status(200).json({
        status: 'success',
        data: studentsData,
        message: 'Students Data Fetched Successfully!'
    })
}

const updateStudent = async (req, res) => {
    const { id } = req.params
    const updatedStudent = await StudentModel.findByIdAndUpdate(
        id,
        req.body,
        { new: true, runValidators: true }
    )

    res.status(200).json({
        status: 'success',
        data: updatedStudent,
        message: 'Update Student API Called!'
    })
}

const deleteStudent = async (req, res) => {
    const { id } = req.params
    await StudentModel.findByIdAndDelete(id)

    res.status(200).json({
        status: 'success',
        message: 'Delete Student API Called!'
    })
}

module.exports = {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent
}
