const express = require("express");
const router = express.Router();


// home page route
router.get("/", (req,res) => {
    res.status(200).send("Home Page");
});

module.exports = router;