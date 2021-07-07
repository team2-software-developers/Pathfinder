const express = require("express");
const router = express.Router;

router.get("/About", (req,res) => {
    res.send("About Page");
})