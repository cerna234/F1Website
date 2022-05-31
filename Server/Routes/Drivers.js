const express = require('express'); // requires express
const router = express.Router(); // uses built in express Router
const { Op } = require("sequelize");
const { Drivers } = require("../models")

//RouteFor Top Drivers
router.get( "/TopDrivers" , async (req,res) => {
    const AllDrivers = await Drivers.findAll({
        where: {
        DriverRank: {
            [Op.lte]: 3,
        }
        
    }
});
    res.json(AllDrivers);
    
} )


//All Drivers
router.get( "/" , async (req,res) => {
    const AllDrivers = await Drivers.findAll();
    res.json(AllDrivers);
    
} )




module.exports = router;