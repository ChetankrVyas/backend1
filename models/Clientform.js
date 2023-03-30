const mongoose = require('mongoose')
const { Schema } = mongoose;

const ClientformSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    pnumber:{
        type: String,
        required: true,
    },
    orgname: {
        type: String,
        required:true,
    },
    project: {
        type: String,
        required:true,
    },
    description: {
        type: String,
        required:true,
    },
    attachment:{
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('clientforms', ClientformSchema)