const express = require("express")
const { where } = require("sequelize")
const router = express.Router()
const {User, Show} = require("../models/index") //Gets the users from db

router.get("/", async (req, res) => {
    res.json(await Show.findAll())
})

router.get("/show/:id",  async (req, res) => {
    res.json(await Show.findByPk(req.params.id))
})

router.get("/category/:Category", async (req, res) => {
    res.json(await Show.findAll({where:{genre: req.params.Category}}))
})

router.put("/show/:id/rating/:score", async (req, res) => {
    res.json(await Show.update({rating: req.params.score}, {where:{id: req.params.id}}))
})

router.put("/show/:id/updates/:status", async (req, res) => {
    res.json(await Show.update({status: req.params.status}, {where:{id: req.params.id}}))
})

router.delete("/show/:id", async (req, res) => {
    await Show.delete({where:{id: req.params.id}})
    res.json("Show deleted!")
})
module.exports = router
