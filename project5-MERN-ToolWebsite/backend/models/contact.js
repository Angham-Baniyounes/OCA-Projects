const mongoose = require ('mongoose')

const contactSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    subject:{
        type: String,
        required:true
    },
    textarea:{
        type: String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const Messages = mongoose.model('contact', contactSchema);
module.exports = Messages;