const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//cloud uri
const MONGO_URI = 'mongodb+srv://jared:101*98Jkj@cluster0.dgal6.mongodb.net/contactme?retryWrites=true&w=majority';

//connect to mongodb
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//check connection
mongoose.connection.on('connected', ()=> {
    console.log('Mongoose is connected :)');
})


//require route
app.use("/", require("./Routes_Models/user_route"));

app.listen(3001, function(){
    console.log("Server is running on port 3001")
})