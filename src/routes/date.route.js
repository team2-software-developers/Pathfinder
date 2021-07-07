const express = require("express");
const router = express.Router();


router.get("/", (res, req) => {
    res.status(200).send("Date page");
});

module.exports = router;