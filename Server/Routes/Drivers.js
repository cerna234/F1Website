const express = require('express'); // requires express
const router = express.Router(); // uses built in express Router
const { Op } = require("sequelize");
const { Drivers,Team, sequelize } = require("../models")

try{
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



router.get("/teams", async(req,res) => {

    const team = await Team.findAll({
        
      

    })
    
    res.json(team)
     
})

router.get("/teams/:id", async(req,res) => {
    const teamId = req.params.id;
    

    const teams = await Team.findAll({

  
        include: [{ 
            model: Drivers,
            where: {TeamId: teamId}
           }],
           
        
        })
        
    res.json(teams);
 
})






}

catch{
console.log("SERVER ERROR")
}








module.exports = router;