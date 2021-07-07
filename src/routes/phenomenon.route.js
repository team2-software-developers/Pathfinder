const express = require("express");
const router = express.Router();


router.get("/", (res, req) => {
    res.status(200).send("Phenomenon page");
    // res.json([
    //     {id:1, username:"someone"},
    //     {id:2, username:"no-one"}
    // ]);
});

module.exports = router;