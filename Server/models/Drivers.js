// ORM model that defines table for mysql table

module.exports = (sequelize, DataTypes) => {
    const Drivers = sequelize.define("Drivers", {
        Name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        DriverNumber:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Nationality:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Team:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Rank:{
            type:DataTypes.INTEGER,
            allowNull: false,
        }
       

        
   
    })
 
    

    return Drivers;
}