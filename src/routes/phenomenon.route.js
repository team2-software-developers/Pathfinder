const express = require("express");
const router = express.Router();


router.get("/", (res, req) => {
    res.status(200).send("Phenomenon page");
});

module.exports = router;