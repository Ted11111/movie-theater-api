const express = require("express");
const app = express();
const {Show, User} = require("./models/index")
const {db} = require("./db");

const port = 3000;


//
const userRouter = require("./Routes/Users")
const showRouter = require("./Routes/Shows")

app.use("/users", userRouter)
app.use("/shows/", showRouter)

//
app.listen(port, () => {
    db.sync();
    console.log("Your server is listening on port " + port);
})