const mongoose = require("mongoose");

const phenomenonSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    date : {
        type : Date,
        required : true
    },
    location: {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : false
    }
});

module.exports = phenomenonSchema();