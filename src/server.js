const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();
require('./db/connection');
const port = process.env.PORT || 5000;

// Routers
const phenomenonRouter = require('./routes/phenomenon.route');
const aboutRouter = require('./routes/about.route');
const dateRouter = require('./routes/date.route');
const locationRouter = require('./routes/location.route');
const searchRouter = require('./routes/search.route');

// I wouldn't normally allow all of these connections but I'm allowing it for testing purposes.
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]}
    ));
app.use(express.json());



//router
if (process.env.NODE_ENV === "production") {
 app.use(express.static("client/build"))
 app.get("*", (req,res) => {
     res.sendFile(path.resolve(__dirname,"client", "build", "index.html"));
  })
};

app.use('/phenomenon', phenomenonRouter);
app.use('/about', aboutRouter);
app.use('/date', dateRouter);
app.use('/location', locationRouter);
app.use('/search', searchRouter);


//listen to server
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});