const mongoose = require("mongoose");
require ("dotenv").config();

const connection = async () => {
    try{

    } catch (error) {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify : false
        });
        

    }
}