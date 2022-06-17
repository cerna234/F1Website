const express = require("express");
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const db = require("./models")


//ROUTES

const DriversRoutes = require("./Routes/Drivers");
app.use("/Drivers", DriversRoutes);


const CircuitsRoutes = require("./Routes/Circuits");
app.use("/Circuits", CircuitsRoutes);





db.sequelize.sync().then( () => {
    app.listen(3002, () => {
        console.log("servers up");
    });
    
});