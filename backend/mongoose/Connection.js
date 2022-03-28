const mongoose = require('mongoose')
require('dotenv').config()

const connection_string = process.env.CONNECTION_STRING

const connectToMongodb = () => {
    mongoose.connect(connection_string)
    .then(() => {
        console.log("MongoDb connection established");
    }).catch(error => {
        console.error("MongoDb connection failed:", error.message)
    })
}

module.exports = connectToMongodb