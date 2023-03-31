const mongoose = require('mongoose');
require("dotenv").config()
const MONGO_URI = process.env.MONGO_URI
const mongoURI = `${MONGO_URI}`
const connectToMongo = async () => {
 await mongoose.connect(mongoURI,() => {
        console.log("connected to mongo successfully"); 
    })
}
module.exports = connectToMongo;