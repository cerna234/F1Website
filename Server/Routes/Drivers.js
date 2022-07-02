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

    const allDrivers = await Drivers.findAll({
        order:[
            ['Points','DESC']
    ],
    });
    res.json(allDrivers);
})


router.get("/teamById/:id", async(req,res) => {
    const teamId = req.params.id;
    const driverTest = await sequelize.query(

        "SELECT DISTINCT(teamName),teamLogo,teamCountry,founded,`Teams`.teamColor FROM `f1`.Drivers,`f1`.Teams WHERE `Drivers`.TeamId = `Teams`.id AND `Drivers`.TeamId = "+ teamId + "",
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


router.get("/driversNames/:id", async(req,res) => {

    const driverId = req.params.id;
    
    const driverNames = await sequelize.query(
        "SELECT GROUP_CONCAT(DISTINCT(`Drivers`.Name)) as 'DriverNames', SUM(points) as 'driverPoints', SUM(podiums) as 'driverPodiums' FROM `f1`.Drivers,`f1`.Teams WHERE `Drivers`.TeamId = "+ driverId +"",
        {type: sequelize.QueryTypes.SELECT}
    )

    res.json(driverNames);
})







module.exports = router;