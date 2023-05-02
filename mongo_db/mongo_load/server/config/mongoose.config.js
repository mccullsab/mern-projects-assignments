const mongoose = require('mongoose');
// require('dotenv').config();


const dbName = process.env.DB;
const username = process.env.USERNAME;
const pw = process.env.PASSWORD;
const uri = `mongodb+srv://${username}:${pw}@cluster0.hpegad6.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));