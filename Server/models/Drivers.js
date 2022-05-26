// ORM model that defines table for mysql table

module.exports = (sequelize, DataTypes) => {
    const Drivers = sequelize.define("Drivers", {
        Name:{
            type: DataTypes.STRING,
            allowNull: false,
        }
       
       

        
   
    });
 
    

    return Drivers;
};