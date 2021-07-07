const express = require("express");
const router = express.Router();

// about page route

router.get("/", (req, res) => {
    res.status(200).send("About page");
});

module.exports = router;