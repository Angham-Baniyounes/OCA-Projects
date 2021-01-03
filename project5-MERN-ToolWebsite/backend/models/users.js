const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username : {
        type: String,
        unique: true,
        trim: true,
        required: true,
        minlength: 4,
    },
    mobile: {
        type: Number,
        required: true,
        minlength: 10,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
}, {
    timestamps: true
});
const User = mongoose.model('users', userSchema);
module.exports = User;