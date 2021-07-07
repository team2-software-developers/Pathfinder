const express = require("express");
const router = express.Router;


// home page route
router.get("/", (req,res) => {
    res.send("Home Page");
});

// about page route

router.get("/about", (req, res) => {
    res.send("About page");
});



module.exports = router;