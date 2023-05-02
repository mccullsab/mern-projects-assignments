const mongoose = require('mongoose');
const dbName = process.env.DB;
const username = process.env.USERNAME;
const pw = process.env.PASSWORD;
const uri = `mongodb+srv://${username}:${pw}@cluster0.hpegad6.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("We have connected to the DATABASE"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));