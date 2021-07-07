const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// Routers
const phenomenonRouter = require('./routes/phenomenon.route');
const aboutRouter = require('./routes/about.route');
const dateRouter = require('./routes/date.route');
const locationRouter = require('./routes/location.route');
const searchRouter = require('./routes/search.route');

app.use(cors());
app.use(express.json());



//router
app.get("/", (req,res) => {
    res.status(200).send("server");
});

app.use('/phenomenon', phenomenonRouter);
app.use('/about', aboutRouter);
app.use('/date', dateRouter);
app.use('/location', locationRouter);
app.use('/search', searchRouter);


//listen to server
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});