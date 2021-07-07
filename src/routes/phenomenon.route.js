const express = require("express");
const router = express.Router();
const app = express();

router.get("/", (res, req) => {
    res.status(200).send("Phenomenon page");
        });

module.exports = router;