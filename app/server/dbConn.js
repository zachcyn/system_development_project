//require('dotenv').config()
const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         return await mongoose.createConnection(process.env.DATABASE_URI).asPromise();
//         // await mongoose.connect(process.env.DATABASE_URI, {
//         //     useUnifiedTopology: true,
//         //     useNewUrlParser: true
//         // });
//     } catch (err) {
//         console.log(err);
//     }
// }


const conn = mongoose.createConnection(process.env.DATABASE_URI);
conn.model('User', require('./models/User'));
conn.model('Player', require('./models/Player'));

module.exports = conn;