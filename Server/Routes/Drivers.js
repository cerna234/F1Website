const express = require('express'); // requires express
const router = express.Router(); // uses built in express Router

const { Drivers } = require("../models")


router.get( "/" , async (req,res) => {
    const AllDrivers = await Drivers.findAll();
    res.json(AllDrivers);
} )




module.exports = router;