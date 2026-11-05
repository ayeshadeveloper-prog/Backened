const mongoose = require('mongoose')
const dns = require('node:dns')

dns.setServers(['8.8.8.8', '8.8.4.4'])

const connectDB = async () => {
    const { MONGO_URI } = process.env

    if (!MONGO_URI) {
        throw new Error('MONGO_URI is not configured in .env')
    }

    await mongoose.connect(MONGO_URI)
    console.log('MongoDB Connected Successfully!')
}

module.exports = connectDB
