const express = require('express'); // requires express
const router = express.Router(); // uses built in express Router
const { Op } = require("sequelize");
const { Circuits } = require("../models");




router.get( "/" ,  async(req,res) => {
    const allCircuits = await Circuits.findAll();


    res.json(allCircuits);
})



module.exports = router;