const express = require('express'); // requires express
const router = express.Router(); // uses built in express Router
const { Op } = require("sequelize");
const { Drivers } = require("../models")

//RouteFor Top Drivers
router.get( "/TopDrivers" , async (req,res) => {
    const AllDrivers = await Drivers.findAll({
        order:[
            ['Points','DESC']
    ],
    limit:3,
});
    res.json(AllDrivers);
    
} )


//All Drivers
router.get( "/TopTen" , async (req,res) => {
    const TopTenDrivers = await Drivers.findAll({
        order:[
            ['Points','DESC']
    ],
    limit:10,
});

    res.json(TopTenDrivers);
    
})




module.exports = router;