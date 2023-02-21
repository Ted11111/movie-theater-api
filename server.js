const express = require("express");
const app = express();
const {Show, User} = require("./models/index")
const {db} = require("./db");

const port = 3000;
//Gets All Users
app.get("/Users", async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})
//Gets One User
app.get("/User/:id", async (req, res) => {
    const user = await User.findByPk(req.params.id)
    res.json(user)
})
//All Shows Watched by a user
app.get("/User/:id/Watched", async (req, res) => {
    const user = await User.findByPk(req.params.id)
    const watched = await Show.findAll({ where: {userId: user}})
    res.json(watched)
})
//Update a show if a user has watched it??
app.put("/AddShow/:UserId/:ShowId", async (req, res) => {
    const user = await User.findByPk(req.params.UserId)
    const show  =  await Show.findByPk(req.params.ShowId)
    const updatedShow =  show.update({userId: req.params.UserId},  {where: {id: req.params.ShowId}})
    res.json(show)
})
//Gets All Shows
app.get("/Shows", async (req, res) => {
    const users = await Show.findAll()
    res.json(users)
})
//Gets One Show
app.get("/Show/:id", async (req, res) => {
    const user = await Show.findByPk(req.params.id)
    res.json(user)
})
//Get show by genre
app.get("/Show/:Genre", async (req, res) => {
    const user = await Show.findAll({where: {genre: req.params.Genre}})
    res.json(user)
})
//
app.listen(port, () => {
    db.sync();
    console.log("Your server is listening on port " + port);
})