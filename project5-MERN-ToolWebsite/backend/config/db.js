const mongoose = require('mongoose'); //1
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async() => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('MongoDB is connected....');
    }catch(err) {
        console.log(err.message);
        process.exit(1); //to exit process when fail
    }
}
module.exports = connectDB;