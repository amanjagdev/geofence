const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

//Middleware
const errorHandler = require("./middlewares/error");

//Routes
const userAuth = require("./routes/userAuth");

dotenv.config();

const db = process.env.MONGO_URI;
console.log(db, "db");

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log("Error connecting to the database", err);
    });

app.use(bodyParser.json());
app.use(cors());

//Defining routes
app.use("/user", userAuth);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});
