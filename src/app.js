const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// Routes
const userRouter = require("./routes/user.route.js");
app.use("/api/v1/auth", userRouter);

app.get("/", (req, res) => {
    console.log("Hello there");
    return res.send("Hello world");
})

module.exports = { app };