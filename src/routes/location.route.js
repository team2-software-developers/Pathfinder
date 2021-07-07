const express = require("express");
const router = express.Router();
// Roman: I'm not sure about what axios is doing here right now sorry.
const Axios = require("axios");

router.get("/", (req,res) => {
    res.status(200).send("Location page");
});

module.exports = router;
