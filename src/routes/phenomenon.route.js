const express = require("express");
const router = express.Router();
const getPhenomenon = require("../controller/phenomenon.controller");


router.get("/", (req, res) => {
    res.status(200).send("Phenomenon page");
    // res.status(200).json([
    //     {id:1, username:"someone"},
    //     {id:2, username:"no-one"}
    // ]);
});




module.exports = router;