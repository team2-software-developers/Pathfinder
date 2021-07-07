const express = require("express");
const router = express.Router;

router.get("/About", (req,res) => {
    res.status(200).send("About Page");
});