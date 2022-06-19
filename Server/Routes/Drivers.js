const express = require('express'); // requires express
const router = express.Router(); // uses built in express Router
const { Op } = require("sequelize");
const { Drivers,Team, sequelize } = require("../models")


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


router.get("/teamById/:teamId", async(req,res) => {
    const teamId = req.params.teamId;
    const driverTest = await sequelize.query(

        "SELECT `Teams`.teamName,points,Name FROM f1.Drivers,f1.Teams WHERE `Drivers`.TeamId = `Teams`.id AND `Drivers`.TeamId = " + teamId + "",
        {type: sequelize.QueryTypes.SELECT}

        
    );
    
    res.json(driverTest);
})

router.get("/teams", async(req,res) => {
    const teams = await sequelize.query(
        "SELECT * FROM `f1`.Teams",
        {type: sequelize.QueryTypes.SELECT}

    );

    res.json(teams);
})





module.exports = router;