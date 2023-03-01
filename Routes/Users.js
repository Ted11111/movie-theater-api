const express = require("express")
const { where } = require("sequelize")
const router = express.Router()
const {User, Show} = require("../models/index") //Gets the users from db

router.get("/", async (req, res) => {
    res.json(await User.findAll())
})

router.get("/user/:id",  async (req, res) => {
    res.json(await User.findByPk(req.params.id))
})

router.get("/user/:id/watched", async (req, res) => {
    res.json(await Show.findAll({where: {userId: req.params.id}}))
})

router.put("/user/:id/watched/:showId", async (req, res) => {
    res.json(await Show.update({userId: req.params.id}, {where: {id: req.params.showId}}))
})
module.exports = router
