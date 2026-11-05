require('dotenv').config()

const express = require('express')
const connectDB = require('./config/db')
const studentRoutes = require('./routes/studentRoutes')
const errorMiddleware = require('./middleware/errorMiddleware')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(studentRoutes)

app.get('/', (req, res) => {
    res.json({
        msg: 'Server is up and running'
    })
})

app.use(errorMiddleware)

const startServer = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log('Server is up and running at port', PORT)
        })
    } catch (error) {
        console.error('Error starting server:', error.message)
        process.exitCode = 1
    }
}

startServer()
