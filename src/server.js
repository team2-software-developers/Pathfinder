const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const port = process.env.PORT || 5000;

// Routers
const aboutRouter = require('./routes/about.route');
const dateRouter = require('./routes/date.route');
const locationRouter = require('./routes/location.route');
const searchRouter = require('./routes/search.route');

app.use(cors());
app.use(express.json());



//router
if (process.env.NODE_ENV === "production") {
 app.use(express.static("client/build"))
 app.get("*", (req,res) => {
     res.sendFile(path.resolve(__dirname,"client", "build", "index.html"));
  })
};

app.use('/about', aboutRouter);
app.use('/date', dateRouter);
app.use('/location', locationRouter);
app.use('/search', searchRouter);


//listen to server
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});