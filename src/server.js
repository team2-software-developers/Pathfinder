const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());



//router
app.get("./", (req,res)=> {
    res.send("server");
})

//listen to server
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})