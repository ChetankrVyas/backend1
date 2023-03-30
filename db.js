const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://chetankrvyas:Chetan%402004@cluster0.4fri6ed.mongodb.net/praukcy"
const connectToMongo = async () => {
 await mongoose.connect(mongoURI,() => {
        console.log("connected to mongo successfully"); 
    })
}
module.exports = connectToMongo;