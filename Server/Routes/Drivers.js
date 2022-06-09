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

router.get( "/driverPage/:id" , async (req,res) => {
    const id = req.params.id;
    const AllDrivers = await Drivers.findByPk(id);
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

router.get("/driverById/:id", async(req,res) => {
    const id = req.params.id;

    const driver = await Drivers.findByPk(id);
    res.json(driver);
})



router.get("/allDrivers", async(req,res) => {

    const allDrivers = await Drivers.findAll();
    res.json(allDrivers);
})



module.exports = router;